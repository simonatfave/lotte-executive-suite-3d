// pipeline helper (not deployed): dump world-space static geometry for baking
window.__dumpGeo = function(){
  const S=window.__suite.scene3; S.updateMatrixWorld(true);
  const pos=[], idx=[]; let base=0, nMesh=0, skipped=0;
  const v=[0,0,0]; const m4=window.__suite.camera.matrixWorld.constructor;
  const tmp=new m4(), inst=new m4();
  S.traverse(o=>{
    if(!o.isMesh || !o.visible || o.userData.noBake) return;
    let vis=true; for(let p=o; p; p=p.parent) if(p.visible===false){ vis=false; break; } if(!vis) return;
    const mats=[].concat(o.material); if(mats.every(m=>m.transparent || m.opacity<1 || m.isMeshBasicMaterial)) { skipped++; return; }
    const g=o.geometry, P=g.attributes.position; if(!P) return;
    const mats2 = o.isInstancedMesh ? Array.from({length:o.count},(_,i)=>{ o.getMatrixAt(i,inst); return tmp.clone().multiplyMatrices(o.matrixWorld,inst); }) : [o.matrixWorld];
    for(const M of mats2){ const e=M.elements;
      for(let i=0;i<P.count;i++){ const x=P.getX(i),y=P.getY(i),z=P.getZ(i);
        pos.push(e[0]*x+e[4]*y+e[8]*z+e[12], e[1]*x+e[5]*y+e[9]*z+e[13], e[2]*x+e[6]*y+e[10]*z+e[14]); }
      if(g.index){ const I=g.index; for(let i=0;i<I.count;i++) idx.push(base+I.getX(i)); } else { for(let i=0;i<P.count;i++) idx.push(base+i); }
      base+=P.count; nMesh++; }
  });
  const pb=new Float32Array(pos), ib=new Uint32Array(idx);
  const toB64=(u8)=>{ let s=''; for(let i=0;i<u8.length;i+=0x8000) s+=String.fromCharCode.apply(null,u8.subarray(i,i+0x8000)); return btoa(s); };
  return { nMesh, skipped, verts:pb.length/3, tris:ib.length/3, pos:toB64(new Uint8Array(pb.buffer)), idx:toB64(new Uint8Array(ib.buffer)) };
};
