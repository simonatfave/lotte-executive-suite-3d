import numpy as np, sys
from PIL import Image, ImageFilter
a=np.clip(np.load(sys.argv[1]),0,1)
img=Image.fromarray((a*255+.5).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.1))
a=np.clip(.12+.88*np.asarray(img,dtype=np.float32)/255,0,1)
Image.fromarray((a*255+.5).astype(np.uint8)).transpose(Image.FLIP_TOP_BOTTOM).convert('RGB').save(sys.argv[2],quality=88,method=6)
