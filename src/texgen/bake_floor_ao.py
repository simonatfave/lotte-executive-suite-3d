# Cycles AO bake of the floor plane (top-down projection) using the app's world-space static geometry.
import bpy, numpy as np, sys, time
D='/home/claude/suite/build/texgen/'
X0,X1,Z0,Z1=-9.0,10.0,-3.0,7.2; RW,RH=2048,1100; Y=0.03; SAMPLES=int(sys.argv[-1]) if sys.argv[-1].isdigit() else 64
pos=np.fromfile(D+'geo_pos.f32',np.float32).reshape(-1,3); idx=np.fromfile(D+'geo_idx.u32',np.uint32).reshape(-1,3)
# drop floor-level slabs (floors, rugs) so they don't occlude the bake plane
keep=pos[idx][:,:,1].max(1)>0.045; idx=idx[keep]
# drop geometry far outside the suite (city backdrop) — irrelevant for 0.9 m AO
c=pos[idx].mean(1); keep=(c[:,0]>X0-1)&(c[:,0]<X1+1)&(c[:,2]>Z0-1)&(c[:,2]<Z1+1); idx=idx[keep]
used=np.unique(idx); remap=np.full(len(pos),-1,np.int64); remap[used]=np.arange(len(used)); P=pos[used]; F=remap[idx]
print('occluder tris',len(F),'verts',len(P),flush=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=SAMPLES
sc.world=bpy.data.worlds.new('w'); sc.world.light_settings.distance=0.9
me=bpy.data.meshes.new('occ'); me.vertices.add(len(P)); me.vertices.foreach_set('co',P.ravel())
me.loops.add(F.size); me.loops.foreach_set('vertex_index',F.ravel().astype(np.int32))
me.polygons.add(len(F)); me.polygons.foreach_set('loop_start',np.arange(0,F.size,3,dtype=np.int32)); me.polygons.foreach_set('loop_total',np.full(len(F),3,np.int32))
me.update(); occ=bpy.data.objects.new('occ',me); sc.collection.objects.link(occ)
# bake target plane, normal +Y (three.js up)
pm=bpy.data.meshes.new('plane'); v=[(X0,Y,Z0),(X1,Y,Z0),(X1,Y,Z1),(X0,Y,Z1)]
pm.from_pydata(v,[],[(0,3,2,1)]); pm.update()
if pm.polygons[0].normal[1]<0: pm.from_pydata([],[],[]); 
uv=pm.uv_layers.new(name='uv')
for li,l in enumerate(pm.loops):
    x,_,z=pm.vertices[l.vertex_index].co; uv.data[li].uv=((x-X0)/(X1-X0),(z-Z0)/(Z1-Z0))
print('plane normal',tuple(round(a,3) for a in pm.polygons[0].normal),flush=True)
pl=bpy.data.objects.new('plane',pm); sc.collection.objects.link(pl)
img=bpy.data.images.new('ao',RW,RH,float_buffer=True)
mat=bpy.data.materials.new('m'); mat.use_nodes=True; n=mat.node_tree.nodes.new('ShaderNodeTexImage'); n.image=img; mat.node_tree.nodes.active=n; pm.materials.append(mat)
for o in sc.objects: o.select_set(False)
pl.select_set(True); bpy.context.view_layer.objects.active=pl
t=time.time(); bpy.ops.object.bake(type='AO',margin=4,use_clear=True); print('bake s',round(time.time()-t,1),flush=True)
a=np.array(img.pixels[:],np.float32).reshape(RH,RW,4)[...,0]
np.save(D+'floor_ao.npy',a); print('ao range',a.min(),a.max(),a.mean())
