# Bake a periodic herringbone floor (same layout as the app's procedural one) with real oak grain
# from Poly Haven "oak_veneer_01" (CC0). Outputs albedo / normal / roughness WebP at 2K and 1K.
import numpy as np, math, sys
from PIL import Image, ImageDraw, ImageFilter
S=2048; W=S/16/math.sqrt(2)
oak=np.asarray(Image.open(sys.argv[1]).convert('RGB'),dtype=np.float32)/255.0; OH,OW,_=oak.shape
c45=math.cos(math.pi/4)
def to_canvas(rx,ry):  # context (rotated) -> canvas
    return rx*c45 - ry*c45, rx*c45 + ry*c45
planks=[]
for k in range(-14,15):
    for n in range(-60,61):
        ox,oy=n+4*k,n-4*k
        planks.append((ox*W,oy*W,4*W,W,True)); planks.append((ox*W,(oy+1)*W,W,4*W,False))
lab=Image.new('I',(S,S),0); d=ImageDraw.Draw(lab); keep=[None]
for (x,y,w,h,hor) in planks:
    pts=[to_canvas(x,y),to_canvas(x+w,y),to_canvas(x+w,y+h),to_canvas(x,y+h)]
    xs=[p[0] for p in pts]; ys=[p[1] for p in pts]
    if max(xs)<-2 or min(xs)>S+2 or max(ys)<-2 or min(ys)>S+2: continue
    keep.append((x,y,w,h,hor)); d.polygon(pts,fill=len(keep)-1)
L=np.asarray(lab); print('planks drawn',len(keep)-1)
Y,X=np.mgrid[0:S,0:S].astype(np.float32)+.5
rx= X*c45 + Y*c45; ry=-X*c45 + Y*c45
P=np.array([(0,0,1,1,1)]+[(x,y,w,h,1 if hor else 0) for (x,y,w,h,hor) in keep[1:]],dtype=np.float32)
px,py,pw,ph,ph_or=[P[L][...,i] for i in range(5)]
a=np.where(ph_or>0, rx-px, ry-py)          # along plank (0..4W)
b=np.where(ph_or>0, ry-py, rx-px)          # across plank (0..W)
# periodic per-plank hash from the plank centre reduced modulo the tile (canvas space)
ccx,ccy=to_canvas(px+pw/2,py+ph/2); ccx=np.mod(ccx,S); ccy=np.mod(ccy,S)
hsh=np.sin(np.floor(ccx/9)*12.9898+np.floor(ccy/9)*78.233+ph_or*3)*43758.5453; v=hsh-np.floor(hsh)
hsh2=np.sin(np.floor(ccx/9)*39.346+np.floor(ccy/9)*11.135)*24634.6345; v2=hsh2-np.floor(hsh2)
# sample oak: grain runs along the plank (image y), random window per plank; flip half the planks
sx=(v*(OW-W-4)+2+b).astype(np.int32)%OW
sy=(v2*(OH-4*W-4)+2+np.where(v>.5,a,4*W-a)).astype(np.int32)%OH
alb=oak[sy,sx]
# grade toward the reference's mid-dark oak, with per-plank tone variation
target=np.array([.40,.255,.155],np.float32); mean=oak.reshape(-1,3).mean(0)
alb=alb/mean*target*(0.82+0.36*v[...,None])
edge=np.minimum(np.minimum(a,4*W-a),np.minimum(b,W-b))
gap=np.clip(edge/1.6,0,1); alb*= (0.35+0.65*gap)[...,None]
alb=np.clip(alb,0,1)
# height: bevelled planks + fine grain from oak luminance
lum=alb.mean(-1); grain=lum-np.asarray(Image.fromarray((lum*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(6)),dtype=np.float32)/255
hgt=np.clip(edge/3.0,0,1)**.6 + grain*1.2
gx=(np.roll(hgt,-1,1)-np.roll(hgt,1,1)); gy=(np.roll(hgt,-1,0)-np.roll(hgt,1,0)); st=2.2
n=np.dstack([-gx*st, gy*st, np.ones_like(gx)]); n/=np.linalg.norm(n,axis=-1,keepdims=True)
rough=np.clip(0.42+0.16*(v-.5)+ (0.5-lum)*0.35 + (1-gap)*0.4,0.15,0.95)
def save(arr,name,size,q):
    im=Image.fromarray((np.clip(arr,0,1)*255+.5).astype(np.uint8)); im=im.resize((size,size),Image.LANCZOS) if size!=S else im
    if im.mode!='RGB': im=im.convert('RGB')
    im.save(name,quality=q,method=6)
sRGB=lambda x: np.where(x<=.0031308,x*12.92,1.055*np.power(x,1/2.4)-.055)
out=sys.argv[2]
for sz,suf in [(2048,''),(1024,'_1k')]:
    save(alb,f'{out}/floor_diff{suf}.webp',sz,84); save(n*.5+.5,f'{out}/floor_nor{suf}.webp',sz,90); save(rough,f'{out}/floor_rough{suf}.webp',sz//2,85)
print('mean albedo',(alb.reshape(-1,3).mean(0)*255).round())
