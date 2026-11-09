# Render the procedural skyline layers once in a browser and store them as WebP (loaded at runtime instead of painting).
import asyncio, base64, io, sys
from PIL import Image
from playwright.async_api import async_playwright
URL=sys.argv[1]; OUT=sys.argv[2]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
    pg=await (await b.new_context(viewport={'width':320,'height':200})).new_page()
    await pg.add_init_script('window.__bakeViews=true; window.__noAuto=true')
    async def h(r): await (r.continue_() if r.request.url.startswith('http://localhost') else r.abort())
    await pg.route('**/*',h)
    await pg.goto(URL,wait_until='commit'); await pg.wait_for_selector('#intro.ready',timeout=900000)
    await pg.evaluate("__suite.scene('evening')")
    names=await pg.evaluate("Object.keys(window.__viewC||{})"); print('layers',names)
    for n in names:
      d=await pg.evaluate(f"window.__viewC['{n}'].toDataURL('image/png')")
      im=Image.open(io.BytesIO(base64.b64decode(d.split(',')[1]))); im.save(f'{OUT}/{n}.webp',quality=86,method=6)
      print(n, im.size, im.mode)
    await b.close()
asyncio.run(main())
