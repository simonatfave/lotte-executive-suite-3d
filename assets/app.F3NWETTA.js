var Ru="170",Ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=0,Wd=1,Fm=2;var sp=1,Cu=2,Yi=3,xs=0,Sn=1,Qt=2,Xt=0,Ir=1,cl=2,Xd=3,qd=4,Pu=5,Zn=100,Bm=101,zm=102,Hm=103,km=104,Kr=200,Vm=201,Gm=202,Wm=203,ch=204,hh=205,Bl=206,Xm=207,zl=208,qm=209,Ym=210,Zm=211,jm=212,Km=213,Jm=214,uh=0,dh=1,fh=2,Nr=3,ph=4,mh=5,gh=6,xh=7,rp=0,Qm=1,$m=2,ms=0,Iu=1,Du=2,Lu=3,ea=4,e0=5,Uu=6,Nu=7;var op=300,Or=301,Fr=302,vh=303,yh=304,Hl=306,Kn=1e3,Ci=1001,_h=1002,Bt=1003,t0=1004;var Da=1005;var jn=1006,Pc=1007;var Vs=1008;var vi=1009,ap=1010,lp=1011,Oo=1012,Ou=1013,Gs=1014,Pi=1015,Yt=1016,Fu=1017,Bu=1018,vs=1020,cp=35902,hp=1021,up=1022,Wn=1023,dp=1024,fp=1025,Dr=1026,ys=1027,zu=1028,Hu=1029,pp=1030,ku=1031;var Vu=1033,sl=33776,rl=33777,ol=33778,al=33779,Mh=35840,bh=35841,Sh=35842,Eh=35843,wh=36196,Th=37492,Ah=37496,Rh=37808,Ch=37809,Ph=37810,Ih=37811,Dh=37812,Lh=37813,Uh=37814,Nh=37815,Oh=37816,Fh=37817,Bh=37818,zh=37819,Hh=37820,kh=37821,ll=36492,Vh=36494,Gh=36495,mp=36283,Wh=36284,Xh=36285,qh=36286;var hl=2300,Yh=2301,Ic=2302,Yd=2400,Zd=2401,jd=2402;var n0=3200,Gu=3201;var Wu=0,i0=1,xi="",hn="srgb",Jr="srgb-linear",kl="linear",_t="srgb";var fr=7680;var Kd=519,s0=512,r0=513,o0=514,gp=515,a0=516,l0=517,c0=518,h0=519,Jd=35044;var Qd="300 es",Zi=2e3,ul=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$d=1234567,Io=Math.PI/180,Br=180/Math.PI;function Qs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Xu(n,e){return(n%e+e)%e}function u0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function d0(n,e,t){return n!==e?(t-n)/(e-n):0}function Do(n,e,t){return(1-t)*n+t*e}function f0(n,e,t,i){return Do(n,e,1-Math.exp(-t*i))}function p0(n,e=1){return e-Math.abs(Xu(n,e*2)-e)}function m0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function g0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function x0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function v0(n,e){return n+Math.random()*(e-n)}function y0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&($d=n);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(n){return n*Io}function b0(n){return n*Br}function S0(n){return(n&n-1)===0&&n!==0}function E0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function w0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function T0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Es={DEG2RAD:Io,RAD2DEG:Br,generateUUID:Qs,clamp:nn,euclideanModulo:Xu,mapLinear:u0,inverseLerp:d0,lerp:Do,damp:f0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:x0,randFloat:v0,randFloatSpread:y0,seededRandom:_0,degToRad:M0,radToDeg:b0,isPowerOfTwo:S0,ceilPowerOfTwo:E0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:T0,normalize:Tn,denormalize:Rr},Y=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],b=s[1],_=s[4],y=s[7],I=s[2],T=s[5],R=s[8];return r[0]=o*x+a*b+l*I,r[3]=o*m+a*_+l*T,r[6]=o*p+a*y+l*R,r[1]=c*x+h*b+u*I,r[4]=c*m+h*_+u*T,r[7]=c*p+h*y+u*R,r[2]=d*x+f*b+g*I,r[5]=d*m+f*_+g*T,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new it;function xp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function A0(){let n=Fo("canvas");return n.style.display="block",n}var ef={};function Co(n){n in ef||(ef[n]=!0,console.warn(n))}function R0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function C0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function P0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ut={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(n.r=ji(n.r),n.g=ji(n.g),n.b=ji(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(n.r=Lr(n.r),n.g=Lr(n.g),n.b=Lr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xi?kl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tf=[.64,.33,.3,.6,.15,.06],nf=[.2126,.7152,.0722],sf=[.3127,.329],rf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[Jr]:{primaries:tf,whitePoint:sf,transfer:kl,toXYZ:rf,fromXYZ:of,luminanceCoefficients:nf,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:tf,whitePoint:sf,transfer:_t,toXYZ:rf,fromXYZ:of,luminanceCoefficients:nf,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});var pr,Zh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=Fo("canvas")),pr.width=e.width,pr.height=e.height;let i=pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},I0=0,dl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lc(s[o].image)):r.push(Lc(s[o]))}else r=Lc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Lc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var D0=0,un=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ci,s=Ci,r=jn,o=Vs,a=Wn,l=vi,c=n.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Qs(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=op;un.DEFAULT_ANISOTROPY=1;var St=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,I=(p+1)/2,T=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return _>y&&_>I?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=R/i):y>I?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=P/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jh=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fl=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kh=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let I=Math.sqrt(_),T=Math.atan2(I,p*b);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let y=a*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new A,af=new Ln,Jn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Ua.subVectors(this.max,bo),mr.subVectors(e.a,bo),gr.subVectors(e.b,bo),xr.subVectors(e.c,bo),cs.subVectors(gr,mr),hs.subVectors(xr,gr),Ls.subVectors(mr,xr);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Ls.z,Ls.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Ls.z,0,-Ls.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Ls.y,Ls.x,0];return!Nc(t,mr,gr,xr,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,mr,gr,xr,Ua))?!1:(Na.crossVectors(cs,hs),t=[Na.x,Na.y,Na.z],Nc(t,mr,gr,xr,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vi=[new A,new A,new A,new A,new A,new A,new A,new A],fi=new A,La=new Jn,mr=new A,gr=new A,xr=new A,cs=new A,hs=new A,Ls=new A,bo=new A,Ua=new A,Na=new A,Us=new A;function Nc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Us.fromArray(n,r);let a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=i.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var L0=new Jn,So=new A,Oc=new A,Ws=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):L0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);let t=So.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(So,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Oc)),this.expandByPoint(So.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gi=new A,Fc=new A,Oa=new A,us=new A,Bc=new A,Fa=new A,zc=new A,_s=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=us.dot(this.direction),l=-us.dot(Oa),c=us.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fc).addScaledVector(Oa,d),f}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){Bc.subVectors(t,e),Fa.subVectors(i,e),zc.crossVectors(Bc,Fa);let o=this.direction.dot(zc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let l=a*this.direction.dot(Fa.crossVectors(us,Fa));if(l<0)return null;let c=a*this.direction.dot(Bc.cross(us));if(c<0||l+c>o)return null;let h=-a*us.dot(zc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,N0)}lookAt(e,t,i){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ds.crossVectors(i,Vn),ds.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ds.crossVectors(i,Vn)),ds.normalize(),Ba.crossVectors(Vn,ds),s[0]=ds.x,s[4]=Ba.x,s[8]=Vn.x,s[1]=ds.y,s[5]=Ba.y,s[9]=Vn.y,s[2]=ds.z,s[6]=Ba.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],_=i[7],y=i[11],I=i[15],T=s[0],R=s[4],P=s[8],S=s[12],M=s[1],D=s[5],z=s[9],B=s[13],k=s[2],K=s[6],W=s[10],se=s[14],X=s[3],re=s[7],ge=s[11],_e=s[15];return r[0]=o*T+a*M+l*k+c*X,r[4]=o*R+a*D+l*K+c*re,r[8]=o*P+a*z+l*W+c*ge,r[12]=o*S+a*B+l*se+c*_e,r[1]=h*T+u*M+d*k+f*X,r[5]=h*R+u*D+d*K+f*re,r[9]=h*P+u*z+d*W+f*ge,r[13]=h*S+u*B+d*se+f*_e,r[2]=g*T+x*M+m*k+p*X,r[6]=g*R+x*D+m*K+p*re,r[10]=g*P+x*z+m*W+p*ge,r[14]=g*S+x*B+m*se+p*_e,r[3]=b*T+_*M+y*k+I*X,r[7]=b*R+_*D+y*K+I*re,r[11]=b*P+_*z+y*W+I*ge,r[15]=b*S+_*B+y*se+I*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,I=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,T=t*b+i*_+s*y+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=b*R,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=_*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=I*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,b=l*c,_=l*h,y=l*u,I=i.x,T=i.y,R=i.z;return s[0]=(1-(x+p))*I,s[1]=(f+y)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=vr.set(s[0],s[1],s[2]).length(),o=vr.set(s[4],s[5],s[6]).length(),a=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);let c=1/r,h=1/o,u=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Zi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Zi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ul)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Zi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,x;if(a===Zi)g=(o+r)*u,x=-2*u;else if(a===ul)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},vr=new A,pi=new ft,U0=new A(0,0,0),N0=new A(1,1,1),ds=new A,Ba=new A,Vn=new A,lf=new ft,cf=new Ln,Ii=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},O0=0,hf=new A,yr=new Ln,Wi=new ft,za=new A,Eo=new A,F0=new A,B0=new Ln,uf=new A(1,0,0),df=new A(0,1,0),ff=new A(0,0,1),pf={type:"added"},z0={type:"removed"},_r={type:"childadded",child:null},Hc={type:"childremoved",child:null},zt=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new Ii,i=new Ln,s=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new it}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(df,e)}rotateZ(e){return this.rotateOnAxis(ff,e)}translateOnAxis(e,t){return hf.copy(e).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(df,e)}translateZ(e){return this.translateOnAxis(ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?za.copy(e):za.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Eo,za,this.up):Wi.lookAt(za,Eo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Wi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pf),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pf),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new A(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new A,Xi=new A,kc=new A,qi=new A,Mr=new A,br=new A,mf=new A,Vc=new A,Gc=new A,Wc=new A,Xc=new St,qc=new St,Yc=new St,Hs=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mi.subVectors(s,t),Xi.subVectors(i,t),kc.subVectors(e,t);let o=mi.dot(mi),a=mi.dot(Xi),l=mi.dot(kc),c=Xi.dot(Xi),h=Xi.dot(kc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(e,t,i,s){return mi.subVectors(i,t),Xi.subVectors(e,t),mi.cross(Xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),mi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Mr.subVectors(s,i),br.subVectors(r,i),Vc.subVectors(e,i);let l=Mr.dot(Vc),c=br.dot(Vc);if(l<=0&&c<=0)return t.copy(i);Gc.subVectors(e,s);let h=Mr.dot(Gc),u=br.dot(Gc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Mr,o);Wc.subVectors(e,r);let f=Mr.dot(Wc),g=br.dot(Wc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(br,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return mf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(mf,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Mr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Xu(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Zc(o,r,e+1/3),this.g=Zc(o,r,e),this.b=Zc(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let i=vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return ut.fromWorkingColorSpace(bn.copy(this),e),Math.round(nn(bn.r*255,0,255))*65536+Math.round(nn(bn.g*255,0,255))*256+Math.round(nn(bn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(bn.copy(this),t);let i=bn.r,s=bn.g,r=bn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=hn){ut.fromWorkingColorSpace(bn.copy(this),e);let t=bn.r,i=bn.g,s=bn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Ha);let i=Do(fs.h,Ha.h,t),s=Do(fs.s,Ha.s,t),r=Do(fs.l,Ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ye;Ye.NAMES=vp;var H0=0,Ms=class extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Qs(),this.name="",this.blending=Ir,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends Ms{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new A,ka=new Y,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jd,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jd&&(e.usage=this.usage),e}};var pl=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ml=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Je=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},k0=0,Yn=new ft,jc=new zt,Sr=new A,Gn=new Jn,wo=new Jn,cn=new A,qt=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Gn.min,wo.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,wo.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(wo.min),Gn.expandByPoint(wo.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),cn.add(Sr)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new A,l[P]=new A;let c=new A,h=new A,u=new A,d=new Y,f=new Y,g=new Y,x=new A,m=new A;function p(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(x),a[S].add(x),a[M].add(x),l[P].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,S=b.length;P<S;++P){let M=b[P],D=M.start,z=M.count;for(let B=D,k=D+z;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let _=new A,y=new A,I=new A,T=new A;function R(P){I.fromBufferAttribute(s,P),T.copy(I);let S=a[P];_.copy(S),_.sub(I.multiplyScalar(I.dot(S))).normalize(),y.crossVectors(T,S);let D=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,D)}for(let P=0,S=b.length;P<S;++P){let M=b[P],D=M.start,z=M.count;for(let B=D,k=D+z;B<k;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gf=new ft,Ns=new _s,Va=new Ws,xf=new A,Ga=new A,Wa=new A,Xa=new A,Kc=new A,qa=new A,vf=new A,Ya=new A,oe=class extends zt{constructor(e=new qt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,e),o?qa.addScaledVector(Kc,h):qa.addScaledVector(Kc.sub(t),h))}t.add(qa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(Va.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Va,xf)===null||Ns.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(gf.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(gf),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,I=_;y<I;y+=3){let T=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);s=Za(this,p,e,i,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Za(this,o,e,i,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,I=_;y<I;y+=3){let T=y,R=y+1,P=y+2;s=Za(this,p,e,i,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,_=m+1,y=m+2;s=Za(this,o,e,i,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function V0(n,e,t,i,s,r,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===xs,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function Za(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ga),n.getVertexPosition(l,Wa),n.getVertexPosition(c,Xa);let h=V0(n,e,t,i,Ga,Wa,Xa,vf);if(h){let u=new A;Hs.getBarycoord(vf,Ga,Wa,Xa,u),s&&(h.uv=Hs.getInterpolatedAttribute(s,a,l,c,u,new Y)),r&&(h.uv1=Hs.getInterpolatedAttribute(r,a,l,c,u,new Y)),o&&(h.normal=Hs.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};Hs.getNormal(Ga,Wa,Xa,d.normal),h.face=d,h.barycoord=u}return h}var Un=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(x,m,p,b,_,y,I,T,R,P,S){let M=y/R,D=I/P,z=y/2,B=I/2,k=T/2,K=R+1,W=P+1,se=0,X=0,re=new A;for(let ge=0;ge<W;ge++){let _e=ge*D-B;for(let Xe=0;Xe<K;Xe++){let ht=Xe*M-z;re[x]=ht*b,re[m]=_e*_,re[p]=k,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=T>0?1:-1,h.push(re.x,re.y,re.z),u.push(Xe/R),u.push(1-ge/P),se+=1}}for(let ge=0;ge<P;ge++)for(let _e=0;_e<R;_e++){let Xe=d+_e+K*ge,ht=d+_e+K*(ge+1),J=d+(_e+1)+K*(ge+1),ae=d+(_e+1)+K*ge;l.push(Xe,ht,ae),l.push(ht,J,ae),X+=6}a.addGroup(f,X,S),f+=X,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function An(n){let e={};for(let t=0;t<n.length;t++){let i=zr(n[t]);for(let s in i)e[s]=i[s]}return e}function G0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var $t={clone:zr,merge:An},W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Ms{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},gl=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ps=new A,yf=new Y,_f=new Y,pn=class extends gl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,yf,_f),t.subVectors(_f,yf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Er=-90,wr=1,zo=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Er,wr,e,t);s.layers=this.layers,this.add(s);let r=new pn(Er,wr,e,t);r.layers=this.layers,this.add(r);let o=new pn(Er,wr,e,t);o.layers=this.layers,this.add(o);let a=new pn(Er,wr,e,t);a.layers=this.layers,this.add(a);let l=new pn(Er,wr,e,t);l.layers=this.layers,this.add(l);let c=new pn(Er,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xl=class extends un{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ho=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Un(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Xt});r.uniforms.tEquirect.value=t;let o=new oe(s,r),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=jn),new zo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Jc=new A,q0=new A,Y0=new it,gi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Jc.subVectors(i,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Y0.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new Ws,ja=new A,ko=class{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-f,y-p).normalize(),i[1].setComponents(l+r,d+c,m+f,y+p).normalize(),i[2].setComponents(l+o,d+h,m+g,y+b).normalize(),i[3].setComponents(l-o,d-h,m-g,y-b).normalize(),i[4].setComponents(l-a,d-u,m-x,y-_).normalize(),t===Zi)i[5].setComponents(l+a,d+u,m+x,y+_).normalize();else if(t===ul)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _p(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Z0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kt=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-b,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let _=b+c*p,y=b+c*(p+1),I=b+1+c*(p+1),T=b+1+c*p;f.push(_,y,T),f.push(y,I,T)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:j0,alphahash_pars_fragment:K0,alphamap_fragment:J0,alphamap_pars_fragment:Q0,alphatest_fragment:$0,alphatest_pars_fragment:eg,aomap_fragment:tg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:sg,begin_vertex:rg,beginnormal_vertex:og,bsdfs:ag,iridescence_fragment:lg,bumpmap_pars_fragment:cg,clipping_planes_fragment:hg,clipping_planes_pars_fragment:ug,clipping_planes_pars_vertex:dg,clipping_planes_vertex:fg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:gg,color_vertex:xg,common:vg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:_g,displacementmap_pars_vertex:Mg,displacementmap_vertex:bg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Eg,colorspace_fragment:wg,colorspace_pars_fragment:Tg,envmap_fragment:Ag,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:kg,envmap_vertex:Ig,fog_vertex:Dg,fog_pars_vertex:Lg,fog_fragment:Ug,fog_pars_fragment:Ng,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Fg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:zg,lights_pars_begin:Hg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:Zg,lights_fragment_maps:jg,lights_fragment_end:Kg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ox,morphinstance_vertex:ax,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:hx,morphtarget_vertex:ux,normal_fragment_begin:dx,normal_fragment_maps:fx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:Mx,opaque_fragment:bx,packing:Sx,premultiplied_alpha_fragment:Ex,project_vertex:wx,dithering_fragment:Tx,dithering_pars_fragment:Ax,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Ix,shadowmap_vertex:Dx,shadowmask_pars_fragment:Lx,skinbase_vertex:Ux,skinning_pars_vertex:Nx,skinning_vertex:Ox,skinnormal_vertex:Fx,specularmap_fragment:Bx,specularmap_pars_fragment:zx,tonemapping_fragment:Hx,tonemapping_pars_fragment:kx,transmission_fragment:Vx,transmission_pars_fragment:Gx,uv_pars_fragment:Wx,uv_pars_vertex:Xx,uv_vertex:qx,worldpos_vertex:Yx,background_vert:Zx,background_frag:jx,backgroundCube_vert:Kx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:$x,depth_vert:ev,depth_frag:tv,distanceRGBA_vert:nv,distanceRGBA_frag:iv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:hv,meshlambert_frag:uv,meshmatcap_vert:dv,meshmatcap_frag:fv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:gv,meshphong_frag:xv,meshphysical_vert:vv,meshphysical_frag:yv,meshtoon_vert:_v,meshtoon_frag:Mv,points_vert:bv,points_frag:Sv,shadow_vert:Ev,shadow_frag:wv,sprite_vert:Tv,sprite_frag:Av},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ri={basic:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:An([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:An([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:An([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:An([xe.points,xe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:An([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:An([xe.common,xe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:An([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:An([xe.sprite,xe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:An([xe.common,xe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:An([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ri.physical={uniforms:An([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ka={r:0,b:0,g:0},Fs=new Ii,Rv=new ft;function Cv(n,e,t,i,s,r,o){let a=new Ye(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Hl)?(h===void 0&&(h=new oe(new Un(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:zr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fs.copy(_.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(Fs)),h.material.toneMapped=ut.getTransfer(y.colorSpace)!==_t,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new oe(new kt(2,2),new xt({name:"BackgroundMaterial",uniforms:zr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ut.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(Ka,yp(n)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:m}}function Pv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,D,z,B,k){let K=!1,W=u(B,z,D);r!==W&&(r=W,c(r.object)),K=f(M,B,z,k),K&&g(M,B,z,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(M,D,z,B),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,D,z){let B=z.wireframe===!0,k=i[M.id];k===void 0&&(k={},i[M.id]=k);let K=k[D.id];K===void 0&&(K={},k[D.id]=K);let W=K[B];return W===void 0&&(W=d(l()),K[B]=W),W}function d(M){let D=[],z=[],B=[];for(let k=0;k<t;k++)D[k]=0,z[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,D,z,B){let k=r.attributes,K=D.attributes,W=0,se=z.getAttributes();for(let X in se)if(se[X].location>=0){let ge=k[X],_e=K[X];if(_e===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),ge===void 0||ge.attribute!==_e||_e&&ge.data!==_e.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(M,D,z,B){let k={},K=D.attributes,W=0,se=z.getAttributes();for(let X in se)if(se[X].location>=0){let ge=K[X];ge===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));let _e={};_e.attribute=ge,ge&&ge.data&&(_e.data=ge.data),k[X]=_e,W++}r.attributes=k,r.attributesNum=W,r.index=B}function x(){let M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){let z=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;z[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),k[M]!==D&&(n.vertexAttribDivisor(M,D),k[M]=D)}function b(){let M=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==M[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function _(M,D,z,B,k,K,W){W===!0?n.vertexAttribIPointer(M,D,z,k,K):n.vertexAttribPointer(M,D,z,B,k,K)}function y(M,D,z,B){x();let k=B.attributes,K=z.getAttributes(),W=D.defaultAttributeValues;for(let se in K){let X=K[se];if(X.location>=0){let re=k[se];if(re===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let ge=re.normalized,_e=re.itemSize,Xe=e.get(re);if(Xe===void 0)continue;let ht=Xe.buffer,J=Xe.type,ae=Xe.bytesPerElement,Ce=J===n.INT||J===n.UNSIGNED_INT||re.gpuType===Ou;if(re.isInterleavedBufferAttribute){let le=re.data,Le=le.stride,ke=re.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<X.locationSize;ze++)p(X.location+ze,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<X.locationSize;ze++)m(X.location+ze);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ze=0;ze<X.locationSize;ze++)_(X.location+ze,_e/X.locationSize,J,ge,Le*ae,(ke+_e/X.locationSize*ze)*ae,Ce)}else{if(re.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)p(X.location+le,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let le=0;le<X.locationSize;le++)_(X.location+le,_e/X.locationSize,J,ge,_e*ae,_e/X.locationSize*le*ae,Ce)}}else if(W!==void 0){let ge=W[se];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(X.location,ge);break;case 3:n.vertexAttrib3fv(X.location,ge);break;case 4:n.vertexAttrib4fv(X.location,ge);break;default:n.vertexAttrib1fv(X.location,ge)}}}}b()}function I(){P();for(let M in i){let D=i[M];for(let z in D){let B=D[z];for(let k in B)h(B[k].object),delete B[k];delete D[z]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let D=i[M.id];for(let z in D){let B=D[z];for(let k in B)h(B[k].object),delete B[k];delete D[z]}delete i[M.id]}function R(M){for(let D in i){let z=i[D];if(z[M.id]===void 0)continue;let B=z[M.id];for(let k in B)h(B[k].object),delete B[k];delete z[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Iv(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===Yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pi&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:I,maxSamples:T}}function Lv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gi,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,_=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,_,f);for(let I=0;I!==_;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Uv(n){let e=new WeakMap;function t(o,a){return a===vh?o.mapping=Or:a===yh&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vh||a===yh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ho(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Hr=class extends gl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,Mf=[.125,.215,.35,.446,.526,.582],ks=20,Qc=new Hr,bf=new Ye,$c=null,eh=0,th=0,nh=!1,zs=(1+Math.sqrt(5))/2,Tr=1/zs,Sf=[new A(-zs,Tr,0),new A(zs,Tr,0),new A(-Tr,0,zs),new A(Tr,0,zs),new A(0,zs,-Tr),new A(0,zs,Tr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$c=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Yt,format:Wn,colorSpace:Jr,depthBuffer:!1},s=Ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nv(r)),this._blurMaterial=Ov(r,e,t)}return s}_compileMaterial(e){let t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,i,s){let a=new pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bf),h.toneMapping=ms,h.autoClear=!1;let f=new Ht({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new oe(new Un,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(bf),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Ja(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Or||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sf[(s-r-1)%Sf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ks-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ks;m>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);let p=[],b=0;for(let R=0;R<ks;++R){let P=R/x,S=Math.exp(-P*P/2);p.push(S),R===0?b+=S:R<m&&(b+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let y=this._sizeLods[s],I=3*y*(s>_-Cr?s-_+Cr:0),T=4*(this._cubeSize-y);Ja(t,I,T,3*y,2*y),l.setRenderTarget(t),l.render(u,Qc)}};function Nv(n){let e=[],t=[],i=[],s=n,r=n-Cr+1+Mf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Cr?l=Mf[o-n+Cr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,P=T>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];b.set(S,x*g*T),_.set(d,m*g*T);let M=[T,T,T,T,T,T];y.set(M,p*g*T)}let I=new qt;I.setAttribute("position",new mn(b,x)),I.setAttribute("uv",new mn(_,m)),I.setAttribute("faceIndex",new mn(y,p)),e.push(I),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ef(n,e,t){let i=new Nt(n,e,t);return i.texture.mapping=Hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ov(n,e,t){let i=new Float32Array(ks),s=new A(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function wf(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Tf(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vh||l===yh,h=l===Or||l===Fr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new kr(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Bv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zv(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let _=0,y=b.length;_<y;_+=3){let I=b[_+0],T=b[_+1],R=b[_+2];d.push(I,T,T,R,R,I)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let I=_+0,T=_+1,R=_+2;d.push(I,T,T,R,R,I)}}else return;let m=new(xp(d)?ml:pl)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hv(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vv(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*I*4*u),R=new fl(T,y,I,u);R.type=Pi,R.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let D=m[M],z=p[M],B=b[M],k=y*I*4*M;for(let K=0;K<D.count;K++){let W=K*P;f===!0&&(s.fromBufferAttribute(D,K),T[k+W+0]=s.x,T[k+W+1]=s.y,T[k+W+2]=s.z,T[k+W+3]=0),g===!0&&(s.fromBufferAttribute(z,K),T[k+W+4]=s.x,T[k+W+5]=s.y,T[k+W+6]=s.z,T[k+W+7]=0),x===!0&&(s.fromBufferAttribute(B,K),T[k+W+8]=s.x,T[k+W+9]=s.y,T[k+W+10]=s.z,T[k+W+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Y(y,I)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Gv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Vr=class extends un{constructor(e,t,i,s,r,o,a,l,c,h=Dr){if(h!==Dr&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dr&&(i=Gs),i===void 0&&h===ys&&(i=vs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mp=new un,Af=new Vr(1,1),bp=new fl,Sp=new Kh,Ep=new xl,Rf=[],Cf=[],Pf=new Float32Array(16),If=new Float32Array(9),Df=new Float32Array(4);function Qr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vl(n,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function Yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function Zv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),rn(t,i)}}function jv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),rn(t,i)}}function Kv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Pf.set(i),n.uniformMatrix4fv(this.addr,!1,Pf),rn(t,i)}}function Jv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function $v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function ty(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Af.compareFunction=gp,r=Af):r=Mp,t.setTexture2D(e||r,s)}function oy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sp,s)}function ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ep,s)}function ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bp,s)}function cy(n){switch(n){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return Zv;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return $v;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(n,e){n.uniform1fv(this.addr,e)}function uy(n,e){let t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function dy(n,e){let t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function fy(n,e){let t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function py(n,e){let t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function my(n,e){let t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gy(n,e){let t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xy(n,e){n.uniform1iv(this.addr,e)}function vy(n,e){n.uniform2iv(this.addr,e)}function yy(n,e){n.uniform3iv(this.addr,e)}function _y(n,e){n.uniform4iv(this.addr,e)}function My(n,e){n.uniform1uiv(this.addr,e)}function by(n,e){n.uniform2uiv(this.addr,e)}function Sy(n,e){n.uniform3uiv(this.addr,e)}function Ey(n,e){n.uniform4uiv(this.addr,e)}function wy(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mp,r[o])}function Ty(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sp,r[o])}function Ay(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ep,r[o])}function Ry(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bp,r[o])}function Cy(n){switch(n){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return xy;case 35667:case 35671:return vy;case 35668:case 35672:return yy;case 35669:case 35673:return _y;case 5125:return My;case 36294:return by;case 36295:return Sy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}var Jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cy(t.type)}},Qh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cy(t.type)}},$h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ih=/(\w+)(\])?(\[|\.)?/g;function Lf(n,e){n.seq.push(e),n.map[e.id]=e}function Py(n,e,t){let i=n.name,s=i.length;for(ih.lastIndex=0;;){let r=ih.exec(i),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lf(t,c===void 0?new Jh(a,n,e):new Qh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new $h(a),Lf(t,u)),t=u}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Py(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Iy=37297,Dy=0;function Ly(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Nf=new it;function Uy(n){ut._getMatrix(Nf,ut.workingColorSpace,n);let e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case kl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Of(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ly(n.getShaderSource(e),o)}else return s}function Ny(n,e){let t=Uy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Oy(n,e){let t;switch(e){case Iu:t="Linear";break;case Du:t="Reinhard";break;case Lu:t="Cineon";break;case ea:t="ACESFilmic";break;case Uu:t="AgX";break;case Nu:t="Neutral";break;case e0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qa=new A;function Fy(){ut.getLuminanceCoefficients(Qa);let n=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function zy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function Ff(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(n){return n.replace(ky,Gy)}var Vy=new Map;function Gy(n,e){let t=st[e];if(t===void 0){let i=Vy.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}var Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(n){return n.replace(Wy,Xy)}function Xy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Yy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function jy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rp:e="ENVMAP_BLENDING_MULTIPLY";break;case Qm:e="ENVMAP_BLENDING_MIX";break;case $m:e="ENVMAP_BLENDING_ADD";break}return e}function Ky(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Jy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qy(t),c=Yy(t),h=Zy(t),u=jy(t),d=Ky(t),f=By(t),g=zy(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),p.length>0&&(p+=`
`)):(m=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),p=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?st.tonemapping_pars_fragment:"",t.toneMapping!==ms?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=eu(o),o=Ff(o,t),o=Bf(o,t),a=eu(a),a=Ff(a,t),a=Bf(a,t),o=zf(o),a=zf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+o,y=b+p+a,I=Uf(s,s.VERTEX_SHADER,_),T=Uf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,I),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(I).trim(),k=s.getShaderInfoLog(T).trim(),K=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,T);else{let se=Of(s,I,"vertex"),X=Of(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+se+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||k==="")&&(W=!1);W&&(D.diagnostics={runnable:K,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(I),s.deleteShader(T),P=new Ur(s,x),S=Hy(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Iy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var Qy=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new nu(e),t.set(e,i)),i}},nu=class{constructor(e){this.id=Qy++,this.code=e,this.usedTimes=0}};function $y(n,e,t,i,s,r,o){let a=new Bo,l=new tu,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,z,B){let k=z.fog,K=B.geometry,W=S.isMeshStandardMaterial?z.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),X=se&&se.mapping===Hl?se.image.height:null,re=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=ge!==void 0?ge.length:0,Xe=0;K.morphAttributes.position!==void 0&&(Xe=1),K.morphAttributes.normal!==void 0&&(Xe=2),K.morphAttributes.color!==void 0&&(Xe=3);let ht,J,ae,Ce;if(re){let Mt=Ri[re];ht=Mt.vertexShader,J=Mt.fragmentShader}else ht=S.vertexShader,J=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);let le=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,ze=B.isBatchedMesh===!0,lt=!!S.map,$=!!S.matcap,ce=!!se,L=!!S.aoMap,Ue=!!S.lightMap,ne=!!S.bumpMap,Ee=!!S.normalMap,fe=!!S.displacementMap,Ve=!!S.emissiveMap,Me=!!S.metalnessMap,C=!!S.roughnessMap,E=S.anisotropy>0,H=S.clearcoat>0,Z=S.dispersion>0,te=S.iridescence>0,j=S.sheen>0,De=S.transmission>0,pe=E&&!!S.anisotropyMap,ye=H&&!!S.clearcoatMap,et=H&&!!S.clearcoatNormalMap,ie=H&&!!S.clearcoatRoughnessMap,Pe=te&&!!S.iridescenceMap,qe=te&&!!S.iridescenceThicknessMap,Ze=j&&!!S.sheenColorMap,Ie=j&&!!S.sheenRoughnessMap,ct=!!S.specularMap,je=!!S.specularColorMap,pt=!!S.specularIntensityMap,N=De&&!!S.transmissionMap,me=De&&!!S.thicknessMap,q=!!S.gradientMap,ee=!!S.alphaMap,we=S.alphaTest>0,be=!!S.alphaHash,tt=!!S.extensions,Ft=ms;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let _n={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:ht,fragmentShader:J,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ze,batchingColor:ze&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Jr,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:$,envMap:ce,envMapMode:ce&&se.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:Ue,bumpMap:ne,normalMap:Ee,displacementMap:d&&fe,emissiveMap:Ve,normalMapObjectSpace:Ee&&S.normalMapType===i0,normalMapTangentSpace:Ee&&S.normalMapType===Wu,metalnessMap:Me,roughnessMap:C,anisotropy:E,anisotropyMap:pe,clearcoat:H,clearcoatMap:ye,clearcoatNormalMap:et,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:te,iridescenceMap:Pe,iridescenceThicknessMap:qe,sheen:j,sheenColorMap:Ze,sheenRoughnessMap:Ie,specularMap:ct,specularColorMap:je,specularIntensityMap:pt,transmission:De,transmissionMap:N,thicknessMap:me,gradientMap:q,opaque:S.transparent===!1&&S.blending===Ir&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:we,alphaHash:be,combine:S.combine,mapUv:lt&&x(S.map.channel),aoMapUv:L&&x(S.aoMap.channel),lightMapUv:Ue&&x(S.lightMap.channel),bumpMapUv:ne&&x(S.bumpMap.channel),normalMapUv:Ee&&x(S.normalMap.channel),displacementMapUv:fe&&x(S.displacementMap.channel),emissiveMapUv:Ve&&x(S.emissiveMap.channel),metalnessMapUv:Me&&x(S.metalnessMap.channel),roughnessMapUv:C&&x(S.roughnessMap.channel),anisotropyMapUv:pe&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(S.sheenRoughnessMap.channel),specularMapUv:ct&&x(S.specularMap.channel),specularColorMapUv:je&&x(S.specularColorMap.channel),specularIntensityMapUv:pt&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:me&&x(S.thicknessMap.channel),alphaMapUv:ee&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ee||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(lt||ee),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:Ve&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qt,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:tt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&S.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _n.vertexUv1s=c.has(1),_n.vertexUv2s=c.has(2),_n.vertexUv3s=c.has(3),c.clear(),_n}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=g[S.type],D;if(M){let z=Ri[M];D=$t.clone(z.uniforms)}else D=S.uniforms;return D}function I(S,M){let D;for(let z=0,B=h.length;z<B;z++){let k=h[z];if(k.cacheKey===M){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Jy(n,M,S,r),h.push(D)),D}function T(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function e1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function t1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||t1),i.length>1&&i.sort(d||kf),s.length>1&&s.sort(d||kf)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function n1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Vf,n.set(i,[o])):s>=r.length?(o=new Vf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function i1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ye};break;case"SpotLight":t={position:new A,direction:new A,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function s1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var r1=0;function o1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a1(n){let e=new i1,t=s1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new ft,o=new ft;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,_=0,y=0,I=0,T=0,R=0;c.sort(o1);for(let S=0,M=c.length;S<M;S++){let D=c[S],z=D.color,B=D.intensity,k=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],B);R++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,X=t.get(D);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=D.shadow.matrix,b++}i.directional[f]=W,f++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[x]=W;let se=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,se.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[x]=se.matrix,D.castShadow){let X=t.get(D);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=K,y++}x++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let se=D.shadow,X=t.get(D);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=W,g++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(B),W.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==I||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=I,P.numLightProbes=R,i.version=r1++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Gf(n){let e=new a1(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function l1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Gf(n),e.set(s,[a])):r>=o.length?(a=new Gf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Vo=class extends Ms{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},iu=class extends Ms{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u1(n,e,t){let i=new ko,s=new Y,r=new Y,o=new St,a=new Vo({depthPacking:Gu}),l=new iu,c={},h=t.maxTextureSize,u={[xs]:Sn,[Sn]:xs,[Qt]:Qt},d=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sp;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Xt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=p!==Yi&&this.type===Yi,k=p===Yi&&this.type!==Yi;for(let K=0,W=T.length;K<W;K++){let se=T[K],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let re=X.getFrameExtents();if(s.multiply(re),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,X.mapSize.y=r.y)),X.map===null||B===!0||k===!0){let _e=this.type!==Yi?{minFilter:Bt,magFilter:Bt}:{};X.map!==null&&X.map.dispose(),X.map=new Nt(s.x,s.y,_e),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ge=X.getViewportCount();for(let _e=0;_e<ge;_e++){let Xe=X.getViewport(_e);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),z.viewport(o),X.updateMatrices(se,_e),i=X.getFrustum(),y(R,P,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Yi&&b(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,D)};function b(T,R){let P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nt(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,P,f,x,null)}function _(T,R,P,S){let M=null,D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let z=M.uuid,B=R.uuid,k=c[z];k===void 0&&(k={},c[z]=k);let K=k[B];K===void 0&&(K=M.clone(),k[B]=K,R.addEventListener("dispose",I)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,S===Yi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=n.properties.get(M);z.light=P}return M}function y(T,R,P,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Yi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let B=e.update(T),k=T.material;if(Array.isArray(k)){let K=B.groups;for(let W=0,se=K.length;W<se;W++){let X=K[W],re=k[X.materialIndex];if(re&&re.visible){let ge=_(T,re,S,M);T.onBeforeShadow(n,T,R,P,B,ge,X),n.renderBufferDirect(P,null,B,ge,T,X),T.onAfterShadow(n,T,R,P,B,ge,X)}}}else if(k.visible){let K=_(T,k,S,M);T.onBeforeShadow(n,T,R,P,B,K,null),n.renderBufferDirect(P,null,B,K,T,null),T.onAfterShadow(n,T,R,P,B,K,null)}}let z=T.children;for(let B=0,k=z.length;B<k;B++)y(z[B],R,P,S,M)}function I(T){T.target.removeEventListener("dispose",I);for(let P in c){let S=c[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var d1={[uh]:dh,[fh]:gh,[ph]:xh,[Nr]:mh,[dh]:uh,[gh]:fh,[xh]:ph,[mh]:Nr};function f1(n,e){function t(){let N=!1,me=new St,q=null,ee=new St(0,0,0,0);return{setMask:function(we){q!==we&&!N&&(n.colorMask(we,we,we,we),q=we)},setLocked:function(we){N=we},setClear:function(we,be,tt,Ft,_n){_n===!0&&(we*=Ft,be*=Ft,tt*=Ft),me.set(we,be,tt,Ft),ee.equals(me)===!1&&(n.clearColor(we,be,tt,Ft),ee.copy(me))},reset:function(){N=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let N=!1,me=!1,q=null,ee=null,we=null;return{setReversed:function(be){if(me!==be){let tt=e.get("EXT_clip_control");me?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);let Ft=we;we=null,this.setClear(Ft)}me=be},getReversed:function(){return me},setTest:function(be){be?le(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(be){q!==be&&!N&&(n.depthMask(be),q=be)},setFunc:function(be){if(me&&(be=d1[be]),ee!==be){switch(be){case uh:n.depthFunc(n.NEVER);break;case dh:n.depthFunc(n.ALWAYS);break;case fh:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case ph:n.depthFunc(n.EQUAL);break;case mh:n.depthFunc(n.GEQUAL);break;case gh:n.depthFunc(n.GREATER);break;case xh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=be}},setLocked:function(be){N=be},setClear:function(be){we!==be&&(me&&(be=1-be),n.clearDepth(be),we=be)},reset:function(){N=!1,q=null,ee=null,we=null,me=!1}}}function s(){let N=!1,me=null,q=null,ee=null,we=null,be=null,tt=null,Ft=null,_n=null;return{setTest:function(Mt){N||(Mt?le(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Mt){me!==Mt&&!N&&(n.stencilMask(Mt),me=Mt)},setFunc:function(Mt,ui,Hi){(q!==Mt||ee!==ui||we!==Hi)&&(n.stencilFunc(Mt,ui,Hi),q=Mt,ee=ui,we=Hi)},setOp:function(Mt,ui,Hi){(be!==Mt||tt!==ui||Ft!==Hi)&&(n.stencilOp(Mt,ui,Hi),be=Mt,tt=ui,Ft=Hi)},setLocked:function(Mt){N=Mt},setClear:function(Mt){_n!==Mt&&(n.clearStencil(Mt),_n=Mt)},reset:function(){N=!1,me=null,q=null,ee=null,we=null,be=null,tt=null,Ft=null,_n=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,_=null,y=null,I=null,T=null,R=new Ye(0,0,0),P=0,S=!1,M=null,D=null,z=null,B=null,k=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=se>=2);let re=null,ge={},_e=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),ht=new St().fromArray(_e),J=new St().fromArray(Xe);function ae(N,me,q,ee){let we=new Uint8Array(4),be=n.createTexture();n.bindTexture(N,be),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<q;tt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(me+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return be}let Ce={};Ce[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Nr),ne(!1),Ee(Wd),le(n.CULL_FACE),L(Xt);function le(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Le(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function ke(N,me){return u[N]!==me?(n.bindFramebuffer(N,me),u[N]=me,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function ze(N,me){let q=f,ee=!1;if(N){q=d.get(me),q===void 0&&(q=[],d.set(me,q));let we=N.textures;if(q.length!==we.length||q[0]!==n.COLOR_ATTACHMENT0){for(let be=0,tt=we.length;be<tt;be++)q[be]=n.COLOR_ATTACHMENT0+be;q.length=we.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function lt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let $={[Zn]:n.FUNC_ADD,[Bm]:n.FUNC_SUBTRACT,[zm]:n.FUNC_REVERSE_SUBTRACT};$[Hm]=n.MIN,$[km]=n.MAX;let ce={[Kr]:n.ZERO,[Vm]:n.ONE,[Gm]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Ym]:n.SRC_ALPHA_SATURATE,[zl]:n.DST_COLOR,[Bl]:n.DST_ALPHA,[Wm]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[qm]:n.ONE_MINUS_DST_COLOR,[Xm]:n.ONE_MINUS_DST_ALPHA,[Zm]:n.CONSTANT_COLOR,[jm]:n.ONE_MINUS_CONSTANT_COLOR,[Km]:n.CONSTANT_ALPHA,[Jm]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,me,q,ee,we,be,tt,Ft,_n,Mt){if(N===Xt){x===!0&&(Le(n.BLEND),x=!1);return}if(x===!1&&(le(n.BLEND),x=!0),N!==Pu){if(N!==m||Mt!==S){if((p!==Zn||y!==Zn)&&(n.blendEquation(n.FUNC_ADD),p=Zn,y=Zn),Mt)switch(N){case Ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.ONE,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,_=null,I=null,T=null,R.set(0,0,0),P=0,m=N,S=Mt}return}we=we||me,be=be||q,tt=tt||ee,(me!==p||we!==y)&&(n.blendEquationSeparate($[me],$[we]),p=me,y=we),(q!==b||ee!==_||be!==I||tt!==T)&&(n.blendFuncSeparate(ce[q],ce[ee],ce[be],ce[tt]),b=q,_=ee,I=be,T=tt),(Ft.equals(R)===!1||_n!==P)&&(n.blendColor(Ft.r,Ft.g,Ft.b,_n),R.copy(Ft),P=_n),m=N,S=!1}function Ue(N,me){N.side===Qt?Le(n.CULL_FACE):le(n.CULL_FACE);let q=N.side===Sn;me&&(q=!q),ne(q),N.blending===Ir&&N.transparent===!1?L(Xt):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ee=N.stencilWrite;a.setTest(ee),ee&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Ee(N){N!==Om?(le(n.CULL_FACE),N!==D&&(N===Wd?n.cullFace(n.BACK):N===Fm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),D=N}function fe(N){N!==z&&(W&&n.lineWidth(N),z=N)}function Ve(N,me,q){N?(le(n.POLYGON_OFFSET_FILL),(B!==me||k!==q)&&(n.polygonOffset(me,q),B=me,k=q)):Le(n.POLYGON_OFFSET_FILL)}function Me(N){N?le(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+K-1),re!==N&&(n.activeTexture(N),re=N)}function E(N,me,q){q===void 0&&(re===null?q=n.TEXTURE0+K-1:q=re);let ee=ge[q];ee===void 0&&(ee={type:void 0,texture:void 0},ge[q]=ee),(ee.type!==N||ee.texture!==me)&&(re!==q&&(n.activeTexture(q),re=q),n.bindTexture(N,me||Ce[N]),ee.type=N,ee.texture=me)}function H(){let N=ge[re];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(N){ht.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ht.copy(N))}function Ie(N){J.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function ct(N,me){let q=c.get(me);q===void 0&&(q=new WeakMap,c.set(me,q));let ee=q.get(N);ee===void 0&&(ee=n.getUniformBlockIndex(me,N.name),q.set(N,ee))}function je(N,me){let ee=c.get(me).get(N);l.get(me)!==ee&&(n.uniformBlockBinding(me,ee,N.__bindingPointIndex),l.set(me,ee))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,ge={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,_=null,y=null,I=null,T=null,R=new Ye(0,0,0),P=0,S=!1,M=null,D=null,z=null,B=null,k=null,ht.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Le,bindFramebuffer:ke,drawBuffers:ze,useProgram:lt,setBlending:L,setMaterial:Ue,setFlipSided:ne,setCullFace:Ee,setLineWidth:fe,setPolygonOffset:Ve,setScissorTest:Me,activeTexture:C,bindTexture:E,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:Pe,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:je,texStorage2D:et,texStorage3D:ie,texSubImage2D:j,texSubImage3D:De,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Ze,viewport:Ie,reset:pt}}function Wf(n,e,t,i){let s=p1(i);switch(t){case hp:return n*e;case dp:return n*e;case fp:return n*e*2;case zu:return n*e/s.components*s.byteLength;case Hu:return n*e/s.components*s.byteLength;case pp:return n*e*2/s.components*s.byteLength;case ku:return n*e*2/s.components*s.byteLength;case up:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Vu:return n*e*4/s.components*s.byteLength;case sl:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:case Eh:return Math.max(n,16)*Math.max(e,8)/4;case Mh:case Sh:return Math.max(n,8)*Math.max(e,8)/2;case wh:case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case Vh:case Gh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mp:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function p1(n){switch(n){case vi:case ap:return{byteLength:1,components:1};case Oo:case lp:case Yt:return{byteLength:2,components:1};case Fu:case Bu:return{byteLength:2,components:4};case Gs:case Ou:case Pi:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function m1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):Fo("canvas")}function x(C,E,H){let Z=1,te=Me(C);if((te.width>H||te.height>H)&&(Z=H/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let j=Math.floor(Z*te.width),De=Math.floor(Z*te.height);u===void 0&&(u=g(j,De));let pe=E?g(j,De):u;return pe.width=j,pe.height=De,pe.getContext("2d").drawImage(C,0,0,j,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+De+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,E,H,Z,te=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=E;if(E===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),E===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),E===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),E===n.RGBA){let De=te?kl:ut.getTransfer(Z);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=De===_t?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(C,E){let H;return C?E===null||E===Gs||E===vs?H=n.DEPTH24_STENCIL8:E===Pi?H=n.DEPTH32F_STENCIL8:E===Oo&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gs||E===vs?H=n.DEPTH_COMPONENT24:E===Pi?H=n.DEPTH_COMPONENT32F:E===Oo&&(H=n.DEPTH_COMPONENT16),H}function I(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){let E=C.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&h.delete(E)}function R(C){let E=C.target;E.removeEventListener("dispose",R),M(E)}function P(C){let E=i.get(C);if(E.__webglInit===void 0)return;let H=C.source,Z=d.get(H);if(Z){let te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(C),Object.keys(Z).length===0&&d.delete(H)}i.remove(C)}function S(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let H=C.source,Z=d.get(H);delete Z[E.__cacheKey],o.memory.textures--}function M(C){let E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=C.textures;for(let Z=0,te=H.length;Z<te;Z++){let j=i.get(H[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(C)}let D=0;function z(){D=0}function B(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function k(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function K(C,E){let H=i.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,C,E);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function W(C,E){let H=i.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function se(C,E){let H=i.get(C);if(C.version>0&&H.__version!==C.version){J(H,C,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function X(C,E){let H=i.get(C);if(C.version>0&&H.__version!==C.version){ae(H,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}let re={[Kn]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[_h]:n.MIRRORED_REPEAT},ge={[Bt]:n.NEAREST,[t0]:n.NEAREST_MIPMAP_NEAREST,[Da]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[Vs]:n.LINEAR_MIPMAP_LINEAR},_e={[s0]:n.NEVER,[h0]:n.ALWAYS,[r0]:n.LESS,[gp]:n.LEQUAL,[o0]:n.EQUAL,[c0]:n.GEQUAL,[a0]:n.GREATER,[l0]:n.NOTEQUAL};function Xe(C,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Pc||E.magFilter===Da||E.magFilter===Vs||E.minFilter===jn||E.minFilter===Pc||E.minFilter===Da||E.minFilter===Vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,re[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,re[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,re[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ge[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bt||E.minFilter!==Da&&E.minFilter!==Vs||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ht(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",T));let Z=E.source,te=d.get(Z);te===void 0&&(te={},d.set(Z,te));let j=k(E);if(j!==C.__cacheKey){te[j]===void 0&&(te[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[j].usedTimes++;let De=te[C.__cacheKey];De!==void 0&&(te[C.__cacheKey].usedTimes--,De.usedTimes===0&&S(E)),C.__cacheKey=j,C.__webglTexture=te[j].texture}return H}function J(C,E,H){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);let te=ht(C,E),j=E.source;t.bindTexture(Z,C.__webglTexture,n.TEXTURE0+H);let De=i.get(j);if(j.version!==De.__version||te===!0){t.activeTexture(n.TEXTURE0+H);let pe=ut.getPrimaries(ut.workingColorSpace),ye=E.colorSpace===xi?null:ut.getPrimaries(E.colorSpace),et=E.colorSpace===xi||pe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ie=x(E.image,!1,s.maxTextureSize);ie=Ve(E,ie);let Pe=r.convert(E.format,E.colorSpace),qe=r.convert(E.type),Ze=_(E.internalFormat,Pe,qe,E.colorSpace,E.isVideoTexture);Xe(Z,E);let Ie,ct=E.mipmaps,je=E.isVideoTexture!==!0,pt=De.__version===void 0||te===!0,N=j.dataReady,me=I(E,ie);if(E.isDepthTexture)Ze=y(E.format===ys,E.type),pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ze,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ze,ie.width,ie.height,0,Pe,qe,null));else if(E.isDataTexture)if(ct.length>0){je&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Ze,ct[0].width,ct[0].height);for(let q=0,ee=ct.length;q<ee;q++)Ie=ct[q],je?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ie.width,Ie.height,Pe,qe,Ie.data):t.texImage2D(n.TEXTURE_2D,q,Ze,Ie.width,Ie.height,0,Pe,qe,Ie.data);E.generateMipmaps=!1}else je?(pt&&t.texStorage2D(n.TEXTURE_2D,me,Ze,ie.width,ie.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Pe,qe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ze,ie.width,ie.height,0,Pe,qe,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ze,ct[0].width,ct[0].height,ie.depth);for(let q=0,ee=ct.length;q<ee;q++)if(Ie=ct[q],E.format!==Wn)if(Pe!==null)if(je){if(N)if(E.layerUpdates.size>0){let we=Wf(Ie.width,Ie.height,E.format,E.type);for(let be of E.layerUpdates){let tt=Ie.data.subarray(be*we/Ie.data.BYTES_PER_ELEMENT,(be+1)*we/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,be,Ie.width,Ie.height,1,Pe,tt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ie.width,Ie.height,ie.depth,Pe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ze,Ie.width,Ie.height,ie.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ie.width,Ie.height,ie.depth,Pe,qe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ze,Ie.width,Ie.height,ie.depth,0,Pe,qe,Ie.data)}else{je&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Ze,ct[0].width,ct[0].height);for(let q=0,ee=ct.length;q<ee;q++)Ie=ct[q],E.format!==Wn?Pe!==null?je?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ie.width,Ie.height,Pe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ie.width,Ie.height,Pe,qe,Ie.data):t.texImage2D(n.TEXTURE_2D,q,Ze,Ie.width,Ie.height,0,Pe,qe,Ie.data)}else if(E.isDataArrayTexture)if(je){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ze,ie.width,ie.height,ie.depth),N)if(E.layerUpdates.size>0){let q=Wf(ie.width,ie.height,E.format,E.type);for(let ee of E.layerUpdates){let we=ie.data.subarray(ee*q/ie.data.BYTES_PER_ELEMENT,(ee+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,Pe,qe,we)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Pe,qe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ze,ie.width,ie.height,ie.depth,0,Pe,qe,ie.data);else if(E.isData3DTexture)je?(pt&&t.texStorage3D(n.TEXTURE_3D,me,Ze,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Pe,qe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ze,ie.width,ie.height,ie.depth,0,Pe,qe,ie.data);else if(E.isFramebufferTexture){if(pt)if(je)t.texStorage2D(n.TEXTURE_2D,me,Ze,ie.width,ie.height);else{let q=ie.width,ee=ie.height;for(let we=0;we<me;we++)t.texImage2D(n.TEXTURE_2D,we,Ze,q,ee,0,Pe,qe,null),q>>=1,ee>>=1}}else if(ct.length>0){if(je&&pt){let q=Me(ct[0]);t.texStorage2D(n.TEXTURE_2D,me,Ze,q.width,q.height)}for(let q=0,ee=ct.length;q<ee;q++)Ie=ct[q],je?N&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Pe,qe,Ie):t.texImage2D(n.TEXTURE_2D,q,Ze,Pe,qe,Ie);E.generateMipmaps=!1}else if(je){if(pt){let q=Me(ie);t.texStorage2D(n.TEXTURE_2D,me,Ze,q.width,q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,qe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ze,Pe,qe,ie);m(E)&&p(Z),De.__version=j.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ae(C,E,H){if(E.image.length!==6)return;let Z=ht(C,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);let j=i.get(te);if(te.version!==j.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);let De=ut.getPrimaries(ut.workingColorSpace),pe=E.colorSpace===xi?null:ut.getPrimaries(E.colorSpace),ye=E.colorSpace===xi||De===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let et=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let ee=0;ee<6;ee++)!et&&!ie?Pe[ee]=x(E.image[ee],!0,s.maxCubemapSize):Pe[ee]=ie?E.image[ee].image:E.image[ee],Pe[ee]=Ve(E,Pe[ee]);let qe=Pe[0],Ze=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),ct=_(E.internalFormat,Ze,Ie,E.colorSpace),je=E.isVideoTexture!==!0,pt=j.__version===void 0||Z===!0,N=te.dataReady,me=I(E,qe);Xe(n.TEXTURE_CUBE_MAP,E);let q;if(et){je&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ct,qe.width,qe.height);for(let ee=0;ee<6;ee++){q=Pe[ee].mipmaps;for(let we=0;we<q.length;we++){let be=q[we];E.format!==Wn?Ze!==null?je?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,be.width,be.height,Ze,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,ct,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,be.width,be.height,Ze,Ie,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,ct,be.width,be.height,0,Ze,Ie,be.data)}}}else{if(q=E.mipmaps,je&&pt){q.length>0&&me++;let ee=Me(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ct,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){je?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe[ee].width,Pe[ee].height,Ze,Ie,Pe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ct,Pe[ee].width,Pe[ee].height,0,Ze,Ie,Pe[ee].data);for(let we=0;we<q.length;we++){let tt=q[we].image[ee].image;je?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,tt.width,tt.height,Ze,Ie,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,ct,tt.width,tt.height,0,Ze,Ie,tt.data)}}else{je?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ze,Ie,Pe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ct,Ze,Ie,Pe[ee]);for(let we=0;we<q.length;we++){let be=q[we];je?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Ze,Ie,be.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,ct,Ze,Ie,be.image[ee])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),j.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ce(C,E,H,Z,te,j){let De=r.convert(H.format,H.colorSpace),pe=r.convert(H.type),ye=_(H.internalFormat,De,pe,H.colorSpace),et=i.get(E),ie=i.get(H);if(ie.__renderTarget=E,!et.__hasExternalTextures){let Pe=Math.max(1,E.width>>j),qe=Math.max(1,E.height>>j);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,j,ye,Pe,qe,E.depth,0,De,pe,null):t.texImage2D(te,j,ye,Pe,qe,0,De,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ee(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,ie.__webglTexture,0,ne(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,ie.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(C,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){let Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,j=y(E.stencilBuffer,te),De=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=ne(E);Ee(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,j,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,j,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,j,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,C)}else{let Z=E.textures;for(let te=0;te<Z.length;te++){let j=Z[te],De=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),ye=_(j.internalFormat,De,pe,j.colorSpace),et=ne(E);H&&Ee(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ye,E.width,E.height):Ee(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,ye,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ye,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);let te=Z.__webglTexture,j=ne(E);if(E.depthTexture.format===Dr)Ee(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(E.depthTexture.format===ys)Ee(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ke(C){let E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),le(E.__webglDepthbuffer[Z],C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),le(E.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(C,E,H){let Z=i.get(C);E!==void 0&&Ce(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ke(C)}function lt(C){let E=C.texture,H=i.get(C),Z=i.get(E);C.addEventListener("dispose",R);let te=C.textures,j=C.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)H.__webglFramebuffer[pe][ye]=n.createFramebuffer()}else H.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)H.__webglFramebuffer[pe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(De)for(let pe=0,ye=te.length;pe<ye;pe++){let et=i.get(te[pe]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){let ye=te[pe];H.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);let et=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),Pe=_(ye.internalFormat,et,ie,ye.colorSpace,C.isXRRenderTarget===!0),qe=ne(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Pe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),le(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ce(H.__webglFramebuffer[pe][ye],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Ce(H.__webglFramebuffer[pe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,ye=te.length;pe<ye;pe++){let et=te[pe],ie=i.get(et);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Xe(n.TEXTURE_2D,et),Ce(H.__webglFramebuffer,C,et,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(et)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),Xe(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ce(H.__webglFramebuffer[ye],C,E,n.COLOR_ATTACHMENT0,pe,ye);else Ce(H.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,pe,0);m(E)&&p(pe),t.unbindTexture()}C.depthBuffer&&ke(C)}function $(C){let E=C.textures;for(let H=0,Z=E.length;H<Z;H++){let te=E[H];if(m(te)){let j=b(C),De=i.get(te).__webglTexture;t.bindTexture(j,De),p(j),t.unbindTexture()}}}let ce=[],L=[];function Ue(C){if(C.samples>0){if(Ee(C)===!1){let E=C.textures,H=C.width,Z=C.height,te=n.COLOR_BUFFER_BIT,j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(C),pe=E.length>1;if(pe)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[ye]);let et=i.get(E[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,te,n.NEAREST),l===!0&&(ce.length=0,L.length=0,ce.push(n.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(j),L.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,De.__webglColorRenderbuffer[ye]);let et=i.get(E[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ne(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){let E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Ve(C,E){let H=C.colorSpace,Z=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Jr&&H!==xi&&(ut.getTransfer(H)===_t?(Z!==Wn||te!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=ze,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ee}function g1(n,e){function t(i,s=xi){let r,o=ut.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ap)return n.BYTE;if(i===lp)return n.SHORT;if(i===Oo)return n.UNSIGNED_SHORT;if(i===Ou)return n.INT;if(i===Gs)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===Yt)return n.HALF_FLOAT;if(i===hp)return n.ALPHA;if(i===up)return n.RGB;if(i===Wn)return n.RGBA;if(i===dp)return n.LUMINANCE;if(i===fp)return n.LUMINANCE_ALPHA;if(i===Dr)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===Hu)return n.RED_INTEGER;if(i===pp)return n.RG;if(i===ku)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===sl||i===rl||i===ol||i===al)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===bh||i===Sh||i===Eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===Th||i===Ah)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wh||i===Th)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ah)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rh||i===Ch||i===Ph||i===Ih||i===Dh||i===Lh||i===Uh||i===Nh||i===Oh||i===Fh||i===Bh||i===zh||i===Hh||i===kh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ch)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ph)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===Vh||i===Gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mp||i===Wh||i===Xh||i===qh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var su=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Wt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},x1={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xt({vertexShader:v1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends Ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new ru,m=t.getContextAttributes(),p=null,b=null,_=[],y=[],I=new Y,T=null,R=new pn;R.viewport=new St;let P=new pn;P.viewport=new St;let S=[R,P],M=new su,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=_[J];return ae===void 0&&(ae=new Lo,_[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=_[J];return ae===void 0&&(ae=new Lo,_[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=_[J];return ae===void 0&&(ae=new Lo,_[J]=ae),ae.getHandSpace()};function B(J){let ae=y.indexOf(J.inputSource);if(ae===-1)return;let Ce=_[ae];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,c||o),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let J=0;J<_.length;J++){let ae=y[J];ae!==null&&(y[J]=null,_[J].disconnect(ae))}D=null,z=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ce=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?ys:Dr,Ce=m.stencil?vs:Gs);let Le={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Nt(d.textureWidth,d.textureHeight,{format:Wn,type:vi,depthTexture:new Vr(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(J){for(let ae=0;ae<J.removed.length;ae++){let Ce=J.removed[ae],le=y.indexOf(Ce);le>=0&&(y[le]=null,_[le].disconnect(Ce))}for(let ae=0;ae<J.added.length;ae++){let Ce=J.added[ae],le=y.indexOf(Ce);if(le===-1){for(let ke=0;ke<_.length;ke++)if(ke>=y.length){y.push(Ce),le=ke;break}else if(y[ke]===null){y[ke]=Ce,le=ke;break}if(le===-1)break}let Le=_[le];Le&&Le.connect(Ce)}}let W=new A,se=new A;function X(J,ae,Ce){W.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(Ce.matrixWorld);let le=W.distanceTo(se),Le=ae.projectionMatrix.elements,ke=Ce.projectionMatrix.elements,ze=Le[14]/(Le[10]-1),lt=Le[14]/(Le[10]+1),$=(Le[9]+1)/Le[5],ce=(Le[9]-1)/Le[5],L=(Le[8]-1)/Le[0],Ue=(ke[8]+1)/ke[0],ne=ze*L,Ee=ze*Ue,fe=le/(-L+Ue),Ve=fe*-L;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ve),J.translateZ(fe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Me=ze+fe,C=lt+fe,E=ne-Ve,H=Ee+(le-Ve),Z=$*lt/C*Me,te=ce*lt/C*Me;J.projectionMatrix.makePerspective(E,H,Z,te,Me,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,Ce=J.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(Ce=x.depthFar)),M.near=P.near=R.near=ae,M.far=P.far=R.far=Ce,(D!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far),R.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;let le=J.parent,Le=M.cameras;re(M,le);for(let ke=0;ke<Le.length;ke++)re(Le[ke],le);Le.length===2?X(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),ge(J,M,le)};function ge(J,ae,Ce){Ce===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Br*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _e=null;function Xe(J,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let le=!1;Ce.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let ke=0;ke<Ce.length;ke++){let ze=Ce[ke],lt=null;if(f!==null)lt=f.getViewport(ze);else{let ce=u.getViewSubImage(d,ze);lt=ce.viewport,ke===0&&(e.setRenderTargetTextures(b,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(b))}let $=S[ke];$===void 0&&($=new pn,$.layers.enable(ke),$.viewport=new St,S[ke]=$),$.matrix.fromArray(ze.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ze.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(lt.x,lt.y,lt.width,lt.height),ke===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push($)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let ke=u.getDepthInformation(Ce[0]);ke&&ke.isValid&&ke.texture&&x.init(e,ke,s.renderState)}}for(let Ce=0;Ce<_.length;Ce++){let le=y[Ce],Le=_[Ce];le!==null&&Le!==void 0&&Le.update(le,ae,c||o)}_e&&_e(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let ht=new _p;ht.setAnimationLoop(Xe),this.setAnimationLoop=function(J){_e=J},this.dispose=function(){}}},Bs=new Ii,_1=new ft;function M1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,Bs.copy(y),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Bs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function b1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;i.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let I=_.program;i.updateUBOMapping(b,I);let T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let _=u();b.__bindingPointIndex=_;let y=n.createBuffer(),I=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],y=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,R=y.length;T<R;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,M=P.length;S<M;S++){let D=P[S];if(f(D,T,S,I)===!0){let z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],k=0;for(let K=0;K<B.length;K++){let W=B[K],se=x(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+k,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,k),k+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,_,y,I){let T=b.value,R=_+"_"+y;if(I[R]===void 0)return typeof T=="number"||typeof T=="boolean"?I[R]=T:I[R]=T.clone(),!0;{let P=I[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return I[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){let _=b.uniforms,y=0,I=16;for(let R=0,P=_.length;R<P;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,D=S.length;M<D;M++){let z=S[M],B=Array.isArray(z.value)?z.value:[z.value];for(let k=0,K=B.length;k<K;k++){let W=B[k],se=x(W),X=y%I,re=X%se.boundary,ge=X+re;y+=re,ge!==0&&I-ge<se.storage&&(y+=I-ge),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=se.storage}}}let T=y%I;return T>0&&(y+=I-T),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var vl=class{constructor(e={}){let{canvas:t=A0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ms,this.toneMappingExposure=1;let y=this,I=!1,T=0,R=0,P=null,S=-1,M=null,D=new St,z=new St,B=null,k=new Ye(0),K=0,W=t.width,se=t.height,X=1,re=null,ge=null,_e=new St(0,0,W,se),Xe=new St(0,0,W,se),ht=!1,J=new ko,ae=!1,Ce=!1,le=new ft,Le=new ft,ke=new A,ze=new St,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function ce(){return P===null?X:1}let L=i;function Ue(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",be,!1),L===null){let O="webgl2";if(L=Ue(O,w),L===null)throw Ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ne,Ee,fe,Ve,Me,C,E,H,Z,te,j,De,pe,ye,et,ie,Pe,qe,Ze,Ie,ct,je,pt,N;function me(){ne=new Bv(L),ne.init(),je=new g1(L,ne),Ee=new Dv(L,ne,e,je),fe=new f1(L,ne),Ee.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),Ve=new kv(L),Me=new e1,C=new m1(L,ne,fe,Me,Ee,je,Ve),E=new Uv(y),H=new Fv(y),Z=new Z0(L),pt=new Pv(L,Z),te=new zv(L,Z,Ve,pt),j=new Gv(L,te,Z,Ve),Ze=new Vv(L,Ee,C),ie=new Lv(Me),De=new $y(y,E,H,ne,Ee,pt,ie),pe=new M1(y,Me),ye=new n1,et=new l1(ne),qe=new Cv(y,E,H,fe,j,f,l),Pe=new u1(y,j,Ee),N=new b1(L,Ve,Ee,fe),Ie=new Iv(L,ne,Ve),ct=new Hv(L,ne,Ve),Ve.programs=De.programs,y.capabilities=Ee,y.extensions=ne,y.properties=Me,y.renderLists=ye,y.shadowMap=Pe,y.state=fe,y.info=Ve}me();let q=new ou(y,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(W,se,!1))},this.getSize=function(w){return w.set(W,se)},this.setSize=function(w,O,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,se=O,t.width=Math.floor(w*X),t.height=Math.floor(O*X),V===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*X,se*X).floor()},this.setDrawingBufferSize=function(w,O,V){W=w,se=O,X=V,t.width=Math.floor(w*V),t.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,O,V,G){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,O,V,G),fe.viewport(D.copy(_e).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Xe)},this.setScissor=function(w,O,V,G){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,O,V,G),fe.scissor(z.copy(Xe).multiplyScalar(X).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){fe.setScissorTest(ht=w)},this.setOpaqueSort=function(w){re=w},this.setTransparentSort=function(w){ge=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,O=!0,V=!0){let G=0;if(w){let F=!1;if(P!==null){let de=P.texture.format;F=de===Vu||de===ku||de===Hu}if(F){let de=P.texture.type,Se=de===vi||de===Gs||de===Oo||de===vs||de===Fu||de===Bu,Ne=qe.getClearColor(),Oe=qe.getClearAlpha(),Ke=Ne.r,nt=Ne.g,Fe=Ne.b;Se?(g[0]=Ke,g[1]=nt,g[2]=Fe,g[3]=Oe,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ke,x[1]=nt,x[2]=Fe,x[3]=Oe,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ye.dispose(),et.dispose(),Me.dispose(),E.dispose(),H.dispose(),j.dispose(),pt.dispose(),N.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",Od),q.removeEventListener("sessionend",Fd),Ds.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=Ve.autoReset,O=Pe.enabled,V=Pe.autoUpdate,G=Pe.needsUpdate,F=Pe.type;me(),Ve.autoReset=w,Pe.enabled=O,Pe.autoUpdate=V,Pe.needsUpdate=G,Pe.type=F}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function tt(w){let O=w.target;O.removeEventListener("dispose",tt),Ft(O)}function Ft(w){_n(w),Me.remove(w)}function _n(w){let O=Me.get(w).programs;O!==void 0&&(O.forEach(function(V){De.releaseProgram(V)}),w.isShaderMaterial&&De.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,G,F,de){O===null&&(O=lt);let Se=F.isMesh&&F.matrixWorld.determinant()<0,Ne=Lm(w,O,V,G,F);fe.setMaterial(G,Se);let Oe=V.index,Ke=1;if(G.wireframe===!0){if(Oe=te.getWireframeAttribute(V),Oe===void 0)return;Ke=2}let nt=V.drawRange,Fe=V.attributes.position,mt=nt.start*Ke,At=(nt.start+nt.count)*Ke;de!==null&&(mt=Math.max(mt,de.start*Ke),At=Math.min(At,(de.start+de.count)*Ke)),Oe!==null?(mt=Math.max(mt,0),At=Math.min(At,Oe.count)):Fe!=null&&(mt=Math.max(mt,0),At=Math.min(At,Fe.count));let Ct=At-mt;if(Ct<0||Ct===1/0)return;pt.setup(F,G,Ne,V,Oe);let Dn,vt=Ie;if(Oe!==null&&(Dn=Z.get(Oe),vt=ct,vt.setIndex(Dn)),F.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*ce()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(F.isLine){let He=G.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*ce()),F.isLineSegments?vt.setMode(L.LINES):F.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else F.isPoints?vt.setMode(L.POINTS):F.isSprite&&vt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)vt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))vt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let He=F._multiDrawStarts,ki=F._multiDrawCounts,yt=F._multiDrawCount,di=Oe?Z.get(Oe).bytesPerElement:1,dr=Me.get(G).currentProgram.getUniforms();for(let kn=0;kn<yt;kn++)dr.setValue(L,"_gl_DrawID",kn),vt.render(He[kn]/di,ki[kn])}else if(F.isInstancedMesh)vt.renderInstances(mt,Ct,F.count);else if(V.isInstancedBufferGeometry){let He=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ki=Math.min(V.instanceCount,He);vt.renderInstances(mt,Ct,ki)}else vt.render(mt,Ct)};function Mt(w,O,V){w.transparent===!0&&w.side===Qt&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,Ia(w,O,V),w.side=xs,w.needsUpdate=!0,Ia(w,O,V),w.side=Qt):Ia(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),p=et.get(V),p.init(O),_.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let de=F.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Ne=de[Se];Mt(Ne,V,F),G.add(Ne)}else Mt(de,V,F),G.add(de)}),_.pop(),p=null,G},this.compileAsync=function(w,O,V=null){let G=this.compile(w,O,V);return new Promise(F=>{function de(){if(G.forEach(function(Se){Me.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){F(w);return}setTimeout(de,10)}ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ui=null;function Hi(w){ui&&ui(w)}function Od(){Ds.stop()}function Fd(){Ds.start()}let Ds=new _p;Ds.setAnimationLoop(Hi),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(w){ui=w,q.setAnimationLoop(w),w===null?Ds.stop():Ds.start()},q.addEventListener("sessionstart",Od),q.addEventListener("sessionend",Fd),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,P),p=et.get(w,_.length),p.init(O),_.push(p),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(Le),Ce=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,Ce),m=ye.get(w,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){let de=y.xr.getDepthSensingMesh();de!==null&&Cc(de,O,-1/0,y.sortObjects)}Cc(w,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,ge),$=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$&&qe.addToRenderList(m,w),this.info.render.frame++,ae===!0&&ie.beginShadows();let V=p.state.shadowsArray;Pe.render(V,w,O),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let de=O.cameras;if(F.length>0)for(let Se=0,Ne=de.length;Se<Ne;Se++){let Oe=de[Se];zd(G,F,w,Oe)}$&&qe.render(w);for(let Se=0,Ne=de.length;Se<Ne;Se++){let Oe=de[Se];Bd(m,w,Oe,Oe.viewport)}}else F.length>0&&zd(G,F,w,O),$&&qe.render(w),Bd(m,w,O);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,O),pt.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Cc(w,O,V,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){G&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Le);let Se=j.update(w),Ne=w.material;Ne.visible&&m.push(w,Se,Ne,V,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){let Se=j.update(w),Ne=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(Le)),Array.isArray(Ne)){let Oe=Se.groups;for(let Ke=0,nt=Oe.length;Ke<nt;Ke++){let Fe=Oe[Ke],mt=Ne[Fe.materialIndex];mt&&mt.visible&&m.push(w,Se,mt,V,ze.z,Fe)}}else Ne.visible&&m.push(w,Se,Ne,V,ze.z,null)}}let de=w.children;for(let Se=0,Ne=de.length;Se<Ne;Se++)Cc(de[Se],O,V,G)}function Bd(w,O,V,G){let F=w.opaque,de=w.transmissive,Se=w.transparent;p.setupLightsView(V),ae===!0&&ie.setGlobalState(y.clippingPlanes,V),G&&fe.viewport(D.copy(G)),F.length>0&&Pa(F,O,V),de.length>0&&Pa(de,O,V),Se.length>0&&Pa(Se,O,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function zd(w,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Nt(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Yt:vi,minFilter:Vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let de=p.state.transmissionRenderTarget[G.id],Se=G.viewport||D;de.setSize(Se.z,Se.w);let Ne=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(k),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),$&&qe.render(V);let Oe=y.toneMapping;y.toneMapping=ms;let Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ae===!0&&ie.setGlobalState(y.clippingPlanes,G),Pa(w,V,G),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de),ne.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Fe=0,mt=O.length;Fe<mt;Fe++){let At=O[Fe],Ct=At.object,Dn=At.geometry,vt=At.material,He=At.group;if(vt.side===Qt&&Ct.layers.test(G.layers)){let ki=vt.side;vt.side=Sn,vt.needsUpdate=!0,Hd(Ct,V,G,Dn,vt,He),vt.side=ki,vt.needsUpdate=!0,nt=!0}}nt===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de))}y.setRenderTarget(Ne),y.setClearColor(k,K),Ke!==void 0&&(G.viewport=Ke),y.toneMapping=Oe}function Pa(w,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,de=w.length;F<de;F++){let Se=w[F],Ne=Se.object,Oe=Se.geometry,Ke=G===null?Se.material:G,nt=Se.group;Ne.layers.test(V.layers)&&Hd(Ne,O,V,Oe,Ke,nt)}}function Hd(w,O,V,G,F,de){w.onBeforeRender(y,O,V,G,F,de),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(y,O,V,G,w,de),F.transparent===!0&&F.side===Qt&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,y.renderBufferDirect(V,O,G,F,w,de),F.side=xs,F.needsUpdate=!0,y.renderBufferDirect(V,O,G,F,w,de),F.side=Qt):y.renderBufferDirect(V,O,G,F,w,de),w.onAfterRender(y,O,V,G,F,de)}function Ia(w,O,V){O.isScene!==!0&&(O=lt);let G=Me.get(w),F=p.state.lights,de=p.state.shadowsArray,Se=F.state.version,Ne=De.getParameters(w,F.state,de,O,V),Oe=De.getProgramCacheKey(Ne),Ke=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?H:E).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",tt),Ke=new Map,G.programs=Ke);let nt=Ke.get(Oe);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===Se)return Vd(w,Ne),nt}else Ne.uniforms=De.getUniforms(w),w.onBeforeCompile(Ne,y),nt=De.acquireProgram(Ne,Oe),Ke.set(Oe,nt),G.uniforms=Ne.uniforms;let Fe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=ie.uniform),Vd(w,Ne),G.needsLights=Nm(w),G.lightsStateVersion=Se,G.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=nt,G.uniformsList=null,nt}function kd(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Ur.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Vd(w,O){let V=Me.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Lm(w,O,V,G,F){O.isScene!==!0&&(O=lt),C.resetTextureUnits();let de=O.fog,Se=G.isMeshStandardMaterial?O.environment:null,Ne=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Jr,Oe=(G.isMeshStandardMaterial?H:E).get(G.envMap||Se),Ke=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,At=!!V.morphAttributes.color,Ct=ms;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=y.toneMapping);let Dn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=Dn!==void 0?Dn.length:0,He=Me.get(G),ki=p.state.lights;if(ae===!0&&(Ce===!0||w!==M)){let qn=w===M&&G.id===S;ie.setState(G,w,qn)}let yt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ki.state.version||He.outputColorSpace!==Ne||F.isBatchedMesh&&He.batching===!1||!F.isBatchedMesh&&He.batching===!0||F.isBatchedMesh&&He.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&He.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&He.instancing===!1||!F.isInstancedMesh&&He.instancing===!0||F.isSkinnedMesh&&He.skinning===!1||!F.isSkinnedMesh&&He.skinning===!0||F.isInstancedMesh&&He.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&He.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&He.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&He.instancingMorph===!1&&F.morphTexture!==null||He.envMap!==Oe||G.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ie.numPlanes||He.numIntersection!==ie.numIntersection)||He.vertexAlphas!==Ke||He.vertexTangents!==nt||He.morphTargets!==Fe||He.morphNormals!==mt||He.morphColors!==At||He.toneMapping!==Ct||He.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,He.__version=G.version);let di=He.currentProgram;yt===!0&&(di=Ia(G,O,F));let dr=!1,kn=!1,_o=!1,Pt=di.getUniforms(),Ai=He.uniforms;if(fe.useProgram(di.program)&&(dr=!0,kn=!0,_o=!0),G.id!==S&&(S=G.id,kn=!0),dr||M!==w){fe.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),C0(le),P0(le),Pt.setValue(L,"projectionMatrix",le)):Pt.setValue(L,"projectionMatrix",w.projectionMatrix),Pt.setValue(L,"viewMatrix",w.matrixWorldInverse);let as=Pt.map.cameraPosition;as!==void 0&&as.setValue(L,ke.setFromMatrixPosition(w.matrixWorld)),Ee.logarithmicDepthBuffer&&Pt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,kn=!0,_o=!0)}if(F.isSkinnedMesh){Pt.setOptional(L,F,"bindMatrix"),Pt.setOptional(L,F,"bindMatrixInverse");let qn=F.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Pt.setValue(L,"boneTexture",qn.boneTexture,C))}F.isBatchedMesh&&(Pt.setOptional(L,F,"batchingTexture"),Pt.setValue(L,"batchingTexture",F._matricesTexture,C),Pt.setOptional(L,F,"batchingIdTexture"),Pt.setValue(L,"batchingIdTexture",F._indirectTexture,C),Pt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Pt.setValue(L,"batchingColorTexture",F._colorsTexture,C));let Mo=V.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&Ze.update(F,V,di),(kn||He.receiveShadow!==F.receiveShadow)&&(He.receiveShadow=F.receiveShadow,Pt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ai.envMap.value=Oe,Ai.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Ai.envMapIntensity.value=O.environmentIntensity),kn&&(Pt.setValue(L,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&Um(Ai,_o),de&&G.fog===!0&&pe.refreshFogUniforms(Ai,de),pe.refreshMaterialUniforms(Ai,G,X,se,p.state.transmissionRenderTarget[w.id]),Ur.upload(L,kd(He),Ai,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ur.upload(L,kd(He),Ai,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(L,"center",F.center),Pt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Pt.setValue(L,"normalMatrix",F.normalMatrix),Pt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let qn=G.uniformsGroups;for(let as=0,ls=qn.length;as<ls;as++){let Gd=qn[as];N.update(Gd,di),N.bind(Gd,di)}}return di}function Um(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Nm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,V){Me.get(w.texture).__webglTexture=O,Me.get(w.depthTexture).__webglTexture=V;let G=Me.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let V=Me.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){P=w,T=O,R=V;let G=!0,F=null,de=!1,Se=!1;if(w){let Oe=Me.get(w);if(Oe.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Oe.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Oe.__hasExternalTextures)C.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Fe=w.depthTexture;if(Oe.__boundDepthTexture!==Fe){if(Fe!==null&&Me.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Se=!0);let nt=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[O])?F=nt[O][V]:F=nt[O],de=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?F=nt[V]:F=nt,D.copy(w.viewport),z.copy(w.scissor),B=w.scissorTest}else D.copy(_e).multiplyScalar(X).floor(),z.copy(Xe).multiplyScalar(X).floor(),B=ht;if(fe.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&fe.drawBuffers(w,F),fe.viewport(D),fe.scissor(z),fe.setScissorTest(B),de){let Oe=Me.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Oe.__webglTexture,V)}else if(Se){let Oe=Me.get(w.texture),Ke=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,V||0,Ke)}S=-1},this.readRenderTargetPixels=function(w,O,V,G,F,de,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){fe.bindFramebuffer(L.FRAMEBUFFER,Ne);try{let Oe=w.texture,Ke=Oe.format,nt=Oe.type;if(!Ee.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&V>=0&&V<=w.height-F&&L.readPixels(O,V,G,F,je.convert(Ke),je.convert(nt),de)}finally{let Oe=P!==null?Me.get(P).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,O,V,G,F,de,Se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){let Oe=w.texture,Ke=Oe.format,nt=Oe.type;if(!Ee.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-G&&V>=0&&V<=w.height-F){fe.bindFramebuffer(L.FRAMEBUFFER,Ne);let Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(O,V,G,F,je.convert(Ke),je.convert(nt),0);let mt=P!==null?Me.get(P).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,mt);let At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await R0(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Fe),L.deleteSync(At),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,V=0){w.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(w.image.width*G),de=Math.floor(w.image.height*G),Se=O!==null?O.x:0,Ne=O!==null?O.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,Se,Ne,F,de),fe.unbindTexture()},this.copyTextureToTexture=function(w,O,V=null,G=null,F=0){w.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let de,Se,Ne,Oe,Ke,nt,Fe,mt,At,Ct=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(de=V.max.x-V.min.x,Se=V.max.y-V.min.y,Ne=V.isBox3?V.max.z-V.min.z:1,Oe=V.min.x,Ke=V.min.y,nt=V.isBox3?V.min.z:0):(de=Ct.width,Se=Ct.height,Ne=Ct.depth||1,Oe=0,Ke=0,nt=0),G!==null?(Fe=G.x,mt=G.y,At=G.z):(Fe=0,mt=0,At=0);let Dn=je.convert(O.format),vt=je.convert(O.type),He;O.isData3DTexture?(C.setTexture3D(O,0),He=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),He=L.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),He=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let ki=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),di=L.getParameter(L.UNPACK_SKIP_PIXELS),dr=L.getParameter(L.UNPACK_SKIP_ROWS),kn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nt);let _o=w.isDataArrayTexture||w.isData3DTexture,Pt=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Ai=Me.get(w),Mo=Me.get(O),qn=Me.get(Ai.__renderTarget),as=Me.get(Mo.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,qn.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let ls=0;ls<Ne;ls++)_o&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(w).__webglTexture,F,nt+ls),w.isDepthTexture?(Pt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,F,At+ls),L.blitFramebuffer(Oe,Ke,de,Se,Fe,mt,de,Se,L.DEPTH_BUFFER_BIT,L.NEAREST)):Pt?L.copyTexSubImage3D(He,F,Fe,mt,At+ls,Oe,Ke,de,Se):L.copyTexSubImage2D(He,F,Fe,mt,At+ls,Oe,Ke,de,Se);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(He,F,Fe,mt,At,de,Se,Ne,Dn,vt,Ct.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(He,F,Fe,mt,At,de,Se,Ne,Dn,Ct.data):L.texSubImage3D(He,F,Fe,mt,At,de,Se,Ne,Dn,vt,Ct):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Fe,mt,de,Se,Dn,vt,Ct.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Fe,mt,Ct.width,Ct.height,Dn,Ct.data):L.texSubImage2D(L.TEXTURE_2D,F,Fe,mt,de,Se,Dn,vt,Ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,ki),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,di),L.pixelStorei(L.UNPACK_SKIP_ROWS,dr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kn),F===0&&O.generateMipmaps&&L.generateMipmap(He),fe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V=null,G=null,F=0){return w.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,V,G,F)},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,fe.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Gr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Di=class extends un{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Bt,h=Bt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Go=class extends mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new ft,Xf=new ft,$a=[],qf=new Jn,S1=new ft,To=new oe,Ao=new Ws,Xs=class extends oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Go(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,S1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),qf.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Ao.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(i),e.ray.intersectsSphere(Ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),Xf.multiplyMatrices(i,Ar),To.matrixWorld=Xf,To.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){let l=$a[o];l.instanceId=r,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Go(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(s*this.count),s,this.count,zu,Pi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wr=class extends un{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Y:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new A,s=[],r=[],o=[],a=new A,l=new ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wo=class extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Y){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},au=class extends Wo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var el=new A,sh=new Yu,rh=new Yu,oh=new Yu,bs=class extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new A){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(el.subVectors(s[0],s[1]).add(s[0]),c=el);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(el.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),sh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),rh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),oh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),oh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(sh.calc(l),rh.calc(l),oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function E1(n,e){let t=1-n;return t*t*e}function w1(n,e){return 2*(1-n)*n*e}function T1(n,e){return n*n*e}function Uo(n,e,t,i){return E1(n,e)+w1(n,t)+T1(n,i)}function A1(n,e){let t=1-n;return t*t*t*e}function R1(n,e){let t=1-n;return 3*t*t*n*e}function C1(n,e){return 3*(1-n)*n*n*e}function P1(n,e){return n*n*n*e}function No(n,e,t,i,s){return A1(n,e)+R1(n,t)+C1(n,i)+P1(n,s)}var yl=class extends Qn{constructor(e=new Y,t=new Y,i=new Y,s=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Y){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lu=class extends Qn{constructor(e=new A,t=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y),No(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends Qn{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cu=class extends Qn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends Qn{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Qn{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y),Uo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Yf(a,l.x,c.x,h.x,u.x),Yf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Y().fromArray(s))}return this}},El=Object.freeze({__proto__:null,ArcCurve:au,CatmullRomCurve3:bs,CubicBezierCurve:yl,CubicBezierCurve3:lu,EllipseCurve:Wo,LineCurve:_l,LineCurve3:cu,QuadraticBezierCurve:Ml,QuadraticBezierCurve3:bl,SplineCurve:Sl}),hu=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new El[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new El[s.type]().fromJSON(s))}return this}},wl=class extends hu{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new _l(this.currentPoint.clone(),new Y(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ml(this.currentPoint.clone(),new Y(e,t),new Y(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new yl(this.currentPoint.clone(),new Y(e,t),new Y(i,s),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Sl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Wo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Tl=class n extends qt{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=nn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new A,d=new Y,f=new A,g=new A,x=new A,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let _=i+b*h*s,y=Math.sin(_),I=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*I,o.push(u.x,u.y,u.z),d.x=b/t,d.y=T/(e.length-1),a.push(d.x,d.y);let R=l[3*T+0]*y,P=l[3*T+1],S=l[3*T+0]*I;c.push(R,P,S)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let y=_+b*e.length,I=y,T=y+e.length,R=y+e.length+1,P=y+1;r.push(I,T,P),r.push(R,P,T)}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Xr=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,h=new Y;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Li=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function b(){let y=new A,I=new A,T=0,R=(t-e)/i;for(let P=0;P<=r;P++){let S=[],M=P/r,D=M*(t-e)+e;for(let z=0;z<=s;z++){let B=z/s,k=B*l+a,K=Math.sin(k),W=Math.cos(k);I.x=D*K,I.y=-M*i+m,I.z=D*W,u.push(I.x,I.y,I.z),y.set(K,R,W).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let M=x[S][P],D=x[S+1][P],z=x[S+1][P+1],B=x[S][P+1];(e>0||S!==0)&&(h.push(M,D,B),T+=3),(t>0||S!==r-1)&&(h.push(D,z,B),T+=3)}c.addGroup(p,T,0),p+=T}function _(y){let I=g,T=new Y,R=new A,P=0,S=y===!0?e:t,M=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let k=z/s*l+a,K=Math.cos(k),W=Math.sin(k);R.x=S*W,R.y=m*M,R.z=S*K,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=K*.5+.5,T.y=W*.5*M+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){let B=I+z,k=D+z;y===!0?h.push(k,k+1,B):h.push(k+1,k,B),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xo=class n extends Li{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},uu=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new A,y=new A,I=new A;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],I),l(_,y,I,b)}function l(b,_,y,I){let T=I+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let S=b.clone().lerp(y,P/T),M=_.clone().lerp(y,P/T),D=T-P;for(let z=0;z<=D;z++)z===0&&P===T?R[P][z]=S:R[P][z]=S.clone().lerp(M,z/D)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){let M=Math.floor(S/2);S%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function c(b){let _=new A;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(b),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let b=new A;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let y=m(b)/2/Math.PI+.5,I=p(b)/Math.PI+.5;o.push(y,1-I)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let _=o[b+0],y=o[b+2],I=o[b+4],T=Math.max(_,y,I),R=Math.min(_,y,I);T>.9&&R<.1&&(_<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),I<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,_){let y=b*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let b=new A,_=new A,y=new A,I=new A,T=new Y,R=new Y,P=new Y;for(let S=0,M=0;S<r.length;S+=9,M+=6){b.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),I.copy(b).add(_).add(y).divideScalar(3);let D=m(I);x(T,M+0,b,D),x(R,M+2,_,D),x(P,M+4,y,D)}}function x(b,_,y,I){I<0&&b.x===1&&(o[_]=b.x-1),y.x===0&&y.z===0&&(o[_]=I/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var yi=class extends wl{constructor(e){super(e),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new wl().fromJSON(s))}return this}},I1={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=O1(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return qo(r,o,t,a,l,f,0),o}};function wp(n,e,t,i,s){let r,o;if(s===Y1(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Zf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Zf(r,n[r],n[r+1],o);return o&&Gl(o,o.next)&&(Zo(o),o=o.next),o}function qs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Gl(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function qo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&k1(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?L1(n,i,s,r):D1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Zo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=U1(qs(n),e,t),qo(n,e,t,i,s,r,2)):o===2&&N1(n,e,t,i,s,r):qo(qs(n),e,t,i,s,r,1);break}}}function D1(n){let e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Pr(s,a,r,l,o,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L1(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ut(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=du(f,g,e,t,i),b=du(x,m,e,t,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=p&&y&&y.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Pr(a,h,l,u,c,d,_.x,_.y)&&Ut(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Pr(a,h,l,u,c,d,y.x,y.y)&&Ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Pr(a,h,l,u,c,d,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Pr(a,h,l,u,c,d,y.x,y.y)&&Ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function U1(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Gl(s,r)&&Tp(s,i,i.next,r)&&Yo(s,r)&&Yo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Zo(i),Zo(i.next),i=n=r),i=i.next}while(i!==n);return qs(i)}function N1(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W1(o,a)){let l=Ap(o,a);o=qs(o,o.next),l=qs(l,l.next),qo(o,e,t,i,s,r,0),qo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function O1(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=wp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(G1(c));for(s.sort(F1),r=0;r<s.length;r++)t=B1(s[r],t);return t}function F1(n,e){return n.x-e.x}function B1(n,e){let t=z1(n,e);if(!t)return e;let i=Ap(t,n);return qs(i,i.next),qs(t,t.next)}function z1(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Pr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Yo(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&H1(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function H1(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function k1(n,e,t,i){let s=n;do s.z===0&&(s.z=du(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,V1(s)}function V1(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function du(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function G1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function W1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!X1(n,e)&&(Yo(n,e)&&Yo(e,n)&&q1(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||Gl(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Gl(n,e){return n.x===e.x&&n.y===e.y}function Tp(n,e,t,i){let s=nl(Ut(n,e,t)),r=nl(Ut(n,e,i)),o=nl(Ut(t,i,n)),a=nl(Ut(t,i,e));return!!(s!==r&&o!==a||s===0&&tl(n,t,e)||r===0&&tl(n,i,e)||o===0&&tl(t,n,i)||a===0&&tl(t,e,i))}function tl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function nl(n){return n>0?1:n<0?-1:0}function X1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Yo(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function q1(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ap(n,e){let t=new fu(n.i,n.x,n.y),i=new fu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Zf(n,e,t,i){let s=new fu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Y1(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var gs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];jf(e),Kf(i,e);let o=e.length;t.forEach(jf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Kf(i,t[l]);let a=I1.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function jf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ys=class n extends qt{constructor(e=new yi([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Z1,_,y=!1,I,T,R,P;p&&(_=p.getSpacedPoints(h),y=!0,d=!1,I=p.computeFrenetFrames(h,!1),T=new A,R=new A,P=new A),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),M=S.shape,D=S.holes;if(!gs.isClockWise(M)){M=M.reverse();for(let $=0,ce=D.length;$<ce;$++){let L=D[$];gs.isClockWise(L)&&(D[$]=L.reverse())}}let B=gs.triangulateShape(M,D),k=M;for(let $=0,ce=D.length;$<ce;$++){let L=D[$];M=M.concat(L)}function K($,ce,L){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ce,L)}let W=M.length,se=B.length;function X($,ce,L){let Ue,ne,Ee,fe=$.x-ce.x,Ve=$.y-ce.y,Me=L.x-$.x,C=L.y-$.y,E=fe*fe+Ve*Ve,H=fe*C-Ve*Me;if(Math.abs(H)>Number.EPSILON){let Z=Math.sqrt(E),te=Math.sqrt(Me*Me+C*C),j=ce.x-Ve/Z,De=ce.y+fe/Z,pe=L.x-C/te,ye=L.y+Me/te,et=((pe-j)*C-(ye-De)*Me)/(fe*C-Ve*Me);Ue=j+fe*et-$.x,ne=De+Ve*et-$.y;let ie=Ue*Ue+ne*ne;if(ie<=2)return new Y(Ue,ne);Ee=Math.sqrt(ie/2)}else{let Z=!1;fe>Number.EPSILON?Me>Number.EPSILON&&(Z=!0):fe<-Number.EPSILON?Me<-Number.EPSILON&&(Z=!0):Math.sign(Ve)===Math.sign(C)&&(Z=!0),Z?(Ue=-Ve,ne=fe,Ee=Math.sqrt(E)):(Ue=fe,ne=Ve,Ee=Math.sqrt(E/2))}return new Y(Ue/Ee,ne/Ee)}let re=[];for(let $=0,ce=k.length,L=ce-1,Ue=$+1;$<ce;$++,L++,Ue++)L===ce&&(L=0),Ue===ce&&(Ue=0),re[$]=X(k[$],k[L],k[Ue]);let ge=[],_e,Xe=re.concat();for(let $=0,ce=D.length;$<ce;$++){let L=D[$];_e=[];for(let Ue=0,ne=L.length,Ee=ne-1,fe=Ue+1;Ue<ne;Ue++,Ee++,fe++)Ee===ne&&(Ee=0),fe===ne&&(fe=0),_e[Ue]=X(L[Ue],L[Ee],L[fe]);ge.push(_e),Xe=Xe.concat(_e)}for(let $=0;$<m;$++){let ce=$/m,L=f*Math.cos(ce*Math.PI/2),Ue=g*Math.sin(ce*Math.PI/2)+x;for(let ne=0,Ee=k.length;ne<Ee;ne++){let fe=K(k[ne],re[ne],Ue);le(fe.x,fe.y,-L)}for(let ne=0,Ee=D.length;ne<Ee;ne++){let fe=D[ne];_e=ge[ne];for(let Ve=0,Me=fe.length;Ve<Me;Ve++){let C=K(fe[Ve],_e[Ve],Ue);le(C.x,C.y,-L)}}}let ht=g+x;for(let $=0;$<W;$++){let ce=d?K(M[$],Xe[$],ht):M[$];y?(R.copy(I.normals[0]).multiplyScalar(ce.x),T.copy(I.binormals[0]).multiplyScalar(ce.y),P.copy(_[0]).add(R).add(T),le(P.x,P.y,P.z)):le(ce.x,ce.y,0)}for(let $=1;$<=h;$++)for(let ce=0;ce<W;ce++){let L=d?K(M[ce],Xe[ce],ht):M[ce];y?(R.copy(I.normals[$]).multiplyScalar(L.x),T.copy(I.binormals[$]).multiplyScalar(L.y),P.copy(_[$]).add(R).add(T),le(P.x,P.y,P.z)):le(L.x,L.y,u/h*$)}for(let $=m-1;$>=0;$--){let ce=$/m,L=f*Math.cos(ce*Math.PI/2),Ue=g*Math.sin(ce*Math.PI/2)+x;for(let ne=0,Ee=k.length;ne<Ee;ne++){let fe=K(k[ne],re[ne],Ue);le(fe.x,fe.y,u+L)}for(let ne=0,Ee=D.length;ne<Ee;ne++){let fe=D[ne];_e=ge[ne];for(let Ve=0,Me=fe.length;Ve<Me;Ve++){let C=K(fe[Ve],_e[Ve],Ue);y?le(C.x,C.y+_[h-1].y,_[h-1].x+L):le(C.x,C.y,u+L)}}}J(),ae();function J(){let $=s.length/3;if(d){let ce=0,L=W*ce;for(let Ue=0;Ue<se;Ue++){let ne=B[Ue];Le(ne[2]+L,ne[1]+L,ne[0]+L)}ce=h+m*2,L=W*ce;for(let Ue=0;Ue<se;Ue++){let ne=B[Ue];Le(ne[0]+L,ne[1]+L,ne[2]+L)}}else{for(let ce=0;ce<se;ce++){let L=B[ce];Le(L[2],L[1],L[0])}for(let ce=0;ce<se;ce++){let L=B[ce];Le(L[0]+W*h,L[1]+W*h,L[2]+W*h)}}i.addGroup($,s.length/3-$,0)}function ae(){let $=s.length/3,ce=0;Ce(k,ce),ce+=k.length;for(let L=0,Ue=D.length;L<Ue;L++){let ne=D[L];Ce(ne,ce),ce+=ne.length}i.addGroup($,s.length/3-$,1)}function Ce($,ce){let L=$.length;for(;--L>=0;){let Ue=L,ne=L-1;ne<0&&(ne=$.length-1);for(let Ee=0,fe=h+m*2;Ee<fe;Ee++){let Ve=W*Ee,Me=W*(Ee+1),C=ce+Ue+Ve,E=ce+ne+Ve,H=ce+ne+Me,Z=ce+Ue+Me;ke(C,E,H,Z)}}}function le($,ce,L){l.push($),l.push(ce),l.push(L)}function Le($,ce,L){ze($),ze(ce),ze(L);let Ue=s.length/3,ne=b.generateTopUV(i,s,Ue-3,Ue-2,Ue-1);lt(ne[0]),lt(ne[1]),lt(ne[2])}function ke($,ce,L,Ue){ze($),ze(ce),ze(Ue),ze(ce),ze(L),ze(Ue);let ne=s.length/3,Ee=b.generateSideWallUV(i,s,ne-6,ne-3,ne-2,ne-1);lt(Ee[0]),lt(Ee[1]),lt(Ee[3]),lt(Ee[1]),lt(Ee[2]),lt(Ee[3])}function ze($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function lt($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return j1(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new El[s.type]().fromJSON(s)),new n(i,e.options)}},Z1={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Y(r,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-u),new Y(d,1-g),new Y(x,1-p)]:[new Y(a,1-l),new Y(h,1-u),new Y(f,1-g),new Y(m,1-p)]}};function j1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Al=class n extends uu{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var jo=class n extends qt{constructor(e=new yi([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;gs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];gs.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=gs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){let b=x[m],_=b[0]+u,y=b[1]+u,I=b[2]+u;i.push(_,y,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return K1(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function K1(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ko=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let b=[],_=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let _=h[p][b+1],y=h[p][b],I=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&f.push(_,y,T),(p!==i-1||l<Math.PI)&&f.push(y,I,T)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(x,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Rl=class n extends qt{constructor(e=1,t=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);let a=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,g=new A,x=new A,m=new A,p=new A;for(let _=0;_<=i;++_){let y=_/i*r*Math.PI*2;b(y,r,o,e,f),b(y+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),x.crossVectors(m,p),p.crossVectors(x,m),x.normalize(),p.normalize();for(let I=0;I<=s;++I){let T=I/s*Math.PI*2,R=-t*Math.cos(T),P=t*Math.sin(T);u.x=f.x+(R*p.x+P*x.x),u.y=f.y+(R*p.y+P*x.y),u.z=f.z+(R*p.z+P*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(_/i),h.push(I/s)}}for(let _=1;_<=i;_++)for(let y=1;y<=s;y++){let I=(s+1)*(_-1)+(y-1),T=(s+1)*_+(y-1),R=(s+1)*_+y,P=(s+1)*(_-1)+y;a.push(I,T,P),a.push(T,R,P)}this.setIndex(a),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2));function b(_,y,I,T,R){let P=Math.cos(_),S=Math.sin(_),M=I/y*_,D=Math.cos(M);R.x=T*(2+D)*.5*P,R.y=T*(2+D)*S*.5,R.z=T*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},qr=class n extends qt{constructor(e=new bl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new Y,h=new A,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),b(),p()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],I=o.binormals[_];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,P=Math.sin(R),S=-Math.cos(R);l.x=S*y.x+P*I.x,l.y=S*y.y+P*I.y,l.z=S*y.z+P*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let I=(s+1)*(_-1)+(y-1),T=(s+1)*_+(y-1),R=(s+1)*_+y,P=(s+1)*(_-1)+y;g.push(I,T,P),g.push(T,R,P)}}function b(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new El[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Cl=class extends xt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ue=class extends Ms{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Pl=class extends Ms{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function il(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function J1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Yr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pu=class extends Yr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yd,endingEnd:Yd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zd:r=e,a=2*t-i;break;case jd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zd:o=e,l=2*i-t;break;case jd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+b*o[c+I]+_*o[l+I]+y*o[u+I];return r}},mu=class extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},gu=class extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=il(t,this.TimeBufferType),this.values=il(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:il(e.times,Array),values:il(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hl:t=this.InterpolantFactoryMethodDiscrete;break;case Yh:t=this.InterpolantFactoryMethodLinear;break;case Ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hl;case this.InterpolantFactoryMethodLinear:return Yh;case this.InterpolantFactoryMethodSmooth:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&J1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Yh;var Zs=class extends Mi{constructor(e,t,i){super(e,t,i)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=hl;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends Mi{};xu.prototype.ValueTypeName="color";var vu=class extends Mi{};vu.prototype.ValueTypeName="number";var yu=class extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Il=class extends Mi{InterpolantFactoryMethodLinear(e){return new yu(this.times,this.values,this.getValueSize(),e)}};Il.prototype.ValueTypeName="quaternion";Il.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Mi{constructor(e,t,i){super(e,t,i)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=hl;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends Mi{};_u.prototype.ValueTypeName="vector";var Jf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Q1=new Mu,Jo=class{constructor(e){this.manager=e!==void 0?e:Q1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var bu=class extends Jo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Jf.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fo("img");function l(){h(),Jf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Zr=class extends Jo{constructor(e){super(e)}load(e,t,i,s){let r=new un,o=new bu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ss=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Dl=class extends Ss{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ah=new ft,Qf=new A,$f=new A,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Su=class extends Qo{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ui=class extends Ss{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ep=new ft,Ro=new A,lh=new A,Eu=class extends Qo{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ro),lh.copy(i.position),lh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lh),i.updateMatrixWorld(),s.makeTranslation(-Ro.x,-Ro.y,-Ro.z),ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep)}},dn=class extends Ss{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wu=class extends Qo{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ll=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ul=class extends Ss{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Nl=class extends Ss{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};var jr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=tp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function tp(){return performance.now()}var Zu="\\[\\]\\.:\\/",$1=new RegExp("["+Zu+"]","g"),ju="[^"+Zu+"]",e_="[^"+Zu.replace("\\.","")+"]",t_=/((?:WC+[\/:])*)/.source.replace("WC",ju),n_=/(WCOD+)?/.source.replace("WCOD",e_),i_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),r_=new RegExp("^"+t_+n_+i_+s_+"$"),o_=["material","materials","bones","map"],Tu=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($1,"")}static parseTrackName(e){let t=r_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);o_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Tu;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cM=new Float32Array(1);var np=new ft,Ol=class{constructor(e,t,i=0,s=1/0){this.ray=new _s(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return np.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(np),this}intersectObject(e,t=!0,i=[]){return Au(e,this,i,t),i.sort(ip),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,i,t);return i.sort(ip),i}};function ip(n,e){return n.distance-e.distance}function Au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Au(r[o],e,t,!0)}}var $o=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fl=class extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);var Rp={type:"change"},Ju={type:"start"},Pp={type:"end"},Wl=new _s,Cp=new gi,l_=Math.cos(70*Es.DEG2RAD),on=new A,Nn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ku=1e-6,Xl=class extends Fl{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Ln,this._lastTargetPosition=new A,this._quat=new Ln().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $o,this._sphericalDelta=new $o,this._scale=1,this._panOffset=new A,this._rotateStart=new Y,this._rotateEnd=new Y,this._rotateDelta=new Y,this._panStart=new Y,this._panEnd=new Y,this._panDelta=new Y,this._dollyStart=new Y,this._dollyEnd=new Y,this._dollyDelta=new Y,this._dollyDirection=new A,this._mouse=new Y,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=h_.bind(this),this._onPointerDown=c_.bind(this),this._onPointerUp=u_.bind(this),this._onContextMenu=v_.bind(this),this._onMouseWheel=p_.bind(this),this._onKeyDown=m_.bind(this),this._onTouchStart=g_.bind(this),this._onTouchMove=x_.bind(this),this._onMouseDown=d_.bind(this),this._onMouseMove=f_.bind(this),this._interceptControlDown=y_.bind(this),this._interceptControlUp=__.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rp),this.update(),this.state=Et.NONE}update(e=null){let t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=on.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wl.origin.copy(this.object.position),Wl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wl.direction))<l_?this.object.lookAt(this.target):(Cp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wl.intersectPlane(Cp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ku||this._lastTargetPosition.distanceToSquared(this.target)>Ku?(this.dispatchEvent(Rp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Y,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function c_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function h_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function u_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pp),this.state=Et.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function d_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case Ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case Ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Ju)}function f_(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function p_(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pp))}function m_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function g_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Ju)}function x_(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function v_(n){this.enabled!==!1&&n.preventDefault()}function y_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function __(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ta=new A;function $n(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ta.copy(e),ta[i]=0,ta.normalize();let c=.5*o/(o+a),h=1-ta.angleTo(n)/l;return Math.sign(ta[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ws=class extends Un{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=$n(g,l,"z","y",r,i),d[p+1]=1-$n(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-$n(g,l,"z","y",r,i),d[p+1]=1-$n(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-$n(g,l,"x","z",r,e),d[p+1]=$n(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-$n(g,l,"x","z",r,e),d[p+1]=1-$n(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-$n(g,l,"x","y",r,e),d[p+1]=1-$n(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=$n(g,l,"x","y",r,e),d[p+1]=1-$n(g,l,"y","x",r,t);break}}};var ql=class extends Gr{constructor(){super();let e=new Un;e.deleteAttribute("uv");let t=new ue({side:Sn}),i=new ue,s=new dn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new oe(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new oe(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new oe(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new oe(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new oe(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new oe(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new oe(e,$r(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new oe(e,$r(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new oe(e,$r(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new oe(e,$r(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new oe(e,$r(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new oe(e,$r(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function $r(n){let e=new Ht;return e.color.setScalar(n),e}var Ts={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},M_=new Hr(-1,1,1,-1,0,1),Qu=class extends qt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},b_=new Qu,On=class{constructor(e){this._mesh=new oe(b_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,M_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yl=class extends an{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$t.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new On(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var na=class extends an{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zl=class extends an{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var jl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Y);this._width=i.width,this._height=i.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yl(Ts),this.copyPass.material.blending=Xt,this.clock=new jr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}na!==void 0&&(o instanceof na?i=!0:o instanceof Zl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kl=class extends an{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ia={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Y},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ft},cameraProjectionMatrixInverse:{value:new ft},cameraWorldMatrix:{value:new ft},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},sa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Jl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ip(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=S_(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new A(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Di(s,e,e);return r.wrapS=Kn,r.wrapT=Kn,r.needsUpdate=!0,r}function S_(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var ra={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:$u(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Y},cameraProjectionMatrixInverse:{value:new ft},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function $u(n,e,t){let i=E_(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function E_(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new A(Math.cos(r),Math.sin(r),o))}return i}var Ql=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let b=g-m+h,_=x-p+h,y=g-1+2*h,I=x-1+2*h,T=l&255,R=c&255,P=this.perm[T+this.perm[R]]%12,S=this.perm[T+m+this.perm[R+p]]%12,M=this.perm[T+1+this.perm[R+1]]%12,D=.5-g*g-x*x;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[P],g,x));let z=.5-b*b-_*_;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[S],b,_));let B=.5-y*y-I*I;return B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[M],y,I)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(i+c),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,b=e-x,_=t-m,y=i-p,I,T,R,P,S,M;b>=_?_>=y?(I=1,T=0,R=0,P=1,S=1,M=0):b>=y?(I=1,T=0,R=0,P=1,S=0,M=1):(I=0,T=0,R=1,P=1,S=0,M=1):_<y?(I=0,T=0,R=1,P=0,S=1,M=1):b<y?(I=0,T=1,R=0,P=0,S=1,M=1):(I=0,T=1,R=0,P=1,S=1,M=0);let D=b-I+f,z=_-T+f,B=y-R+f,k=b-P+2*f,K=_-S+2*f,W=y-M+2*f,se=b-1+3*f,X=_-1+3*f,re=y-1+3*f,ge=h&255,_e=u&255,Xe=d&255,ht=this.perm[ge+this.perm[_e+this.perm[Xe]]]%12,J=this.perm[ge+I+this.perm[_e+T+this.perm[Xe+R]]]%12,ae=this.perm[ge+P+this.perm[_e+S+this.perm[Xe+M]]]%12,Ce=this.perm[ge+1+this.perm[_e+1+this.perm[Xe+1]]]%12,le=.6-b*b-_*_-y*y;le<0?s=0:(le*=le,s=le*le*this.dot3(this.grad3[ht],b,_,y));let Le=.6-D*D-z*z-B*B;Le<0?r=0:(Le*=Le,r=Le*Le*this.dot3(this.grad3[J],D,z,B));let ke=.6-k*k-K*K-W*W;ke<0?o=0:(ke*=ke,o=ke*ke*this.dot3(this.grad3[ae],k,K,W));let ze=.6-se*se-X*X-re*re;return ze<0?a=0:(ze*=ze,a=ze*ze*this.dot3(this.grad3[Ce],se,X,re)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,x=(e+t+i+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),b=Math.floor(i+x),_=Math.floor(s+x),y=(m+p+b+_)*c,I=m-y,T=p-y,R=b-y,P=_-y,S=e-I,M=t-T,D=i-R,z=s-P,B=S>M?32:0,k=S>D?16:0,K=M>D?8:0,W=S>z?4:0,se=M>z?2:0,X=D>z?1:0,re=B+k+K+W+se+X,ge=o[re][0]>=3?1:0,_e=o[re][1]>=3?1:0,Xe=o[re][2]>=3?1:0,ht=o[re][3]>=3?1:0,J=o[re][0]>=2?1:0,ae=o[re][1]>=2?1:0,Ce=o[re][2]>=2?1:0,le=o[re][3]>=2?1:0,Le=o[re][0]>=1?1:0,ke=o[re][1]>=1?1:0,ze=o[re][2]>=1?1:0,lt=o[re][3]>=1?1:0,$=S-ge+c,ce=M-_e+c,L=D-Xe+c,Ue=z-ht+c,ne=S-J+2*c,Ee=M-ae+2*c,fe=D-Ce+2*c,Ve=z-le+2*c,Me=S-Le+3*c,C=M-ke+3*c,E=D-ze+3*c,H=z-lt+3*c,Z=S-1+4*c,te=M-1+4*c,j=D-1+4*c,De=z-1+4*c,pe=m&255,ye=p&255,et=b&255,ie=_&255,Pe=a[pe+a[ye+a[et+a[ie]]]]%32,qe=a[pe+ge+a[ye+_e+a[et+Xe+a[ie+ht]]]]%32,Ze=a[pe+J+a[ye+ae+a[et+Ce+a[ie+le]]]]%32,Ie=a[pe+Le+a[ye+ke+a[et+ze+a[ie+lt]]]]%32,ct=a[pe+1+a[ye+1+a[et+1+a[ie+1]]]]%32,je=.6-S*S-M*M-D*D-z*z;je<0?h=0:(je*=je,h=je*je*this.dot4(r[Pe],S,M,D,z));let pt=.6-$*$-ce*ce-L*L-Ue*Ue;pt<0?u=0:(pt*=pt,u=pt*pt*this.dot4(r[qe],$,ce,L,Ue));let N=.6-ne*ne-Ee*Ee-fe*fe-Ve*Ve;N<0?d=0:(N*=N,d=N*N*this.dot4(r[Ze],ne,Ee,fe,Ve));let me=.6-Me*Me-C*C-E*E-H*H;me<0?f=0:(me*=me,f=me*me*this.dot4(r[Ie],Me,C,E,H));let q=.6-Z*Z-te*te-j*j-De*De;return q<0?g=0:(q*=q,g=q*q*this.dot4(r[ct],Z,te,j,De)),27*(h+u+d+f+g)}};var oa=class n extends an{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ip(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Nt(this.width,this.height,{type:Yt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},ia.defines),uniforms:$t.clone(ia.uniforms),vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,blending:Xt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pl,this.normalMaterial.blending=Xt,this.pdMaterial=new xt({defines:Object.assign({},ra.defines),uniforms:$t.clone(ra.uniforms),vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},sa.defines),uniforms:$t.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,blending:Xt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:$t.clone(Ts.uniforms),vertexShader:Ts.vertexShader,fragmentShader:Ts.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zl,blendDst:Kr,blendEquation:Zn,blendSrcAlpha:Bl,blendDstAlpha:Kr,blendEquationAlpha:Zn}),this.blendMaterial=new xt({uniforms:$t.clone(Jl.uniforms),vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pu,blendSrc:zl,blendDst:Kr,blendEquation:Zn,blendSrcAlpha:Bl,blendDstAlpha:Kr,blendEquationAlpha:Zn}),this.fsQuad=new On(null),this.originalClearColor=new Ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Vr,this.depthTexture.format=ys,this.depthTexture.type=vs,this.normalRenderTarget=new Nt(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:Yt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=$u(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Xt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Xt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Xt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Xt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Xt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Ql,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Di(s,e,e,Wn,vi);return r.wrapS=Kn,r.wrapT=Kn,r.needsUpdate=!0,r}};oa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Dp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var eo=class n extends an{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Y(e.x,e.y):new Y(256,256),this.clearColor=new Ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,o,{type:Yt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Nt(r,o,{type:Yt});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Nt(r,o,{type:Yt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Dp;this.highPassUniforms=$t.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Y(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ts;this.copyUniforms=$t.clone(h.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:cl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ye,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new On(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Y(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};eo.BlurDirectionX=new Y(1,0);eo.BlurDirectionY=new Y(0,1);var Lp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var $l=class extends an{constructor(){super();let e=Lp;this.uniforms=$t.clone(e.uniforms),this.material=new Cl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new On(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Iu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var aa={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Y(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},la={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Y(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},ec={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Y(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var tc=class extends an{constructor(e,t){super(),this.edgesRT=new Nt(e,t,{depthBuffer:!1,type:Yt}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Nt(e,t,{depthBuffer:!1,type:Yt}),this.weightsRT.texture.name="SMAAPass.weights";let i=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new un,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=jn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new un,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=Bt,this.searchTexture.minFilter=Bt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=$t.clone(aa.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new xt({defines:Object.assign({},aa.defines),uniforms:this.uniformsEdges,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader}),this.uniformsWeights=$t.clone(la.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new xt({defines:Object.assign({},la.defines),uniforms:this.uniformsWeights,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this.uniformsBlend=$t.clone(ec.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new xt({uniforms:this.uniformsBlend,vertexShader:ec.vertexShader,fragmentShader:ec.fragmentShader}),this.fsQuad=new On(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var Up={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var nc=class extends an{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Nt(1,1,{minFilter:Bt,magFilter:Bt,type:Yt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Vo,this.materialDepth.depthPacking=Gu,this.materialDepth.blending=Xt;let a=Up,l=$t.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=t.aspect,l.aperture.value=r,l.maxblur.value=o,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new xt({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new On(this.materialBokeh),this._oldClearColor=new Ye}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};function Op(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new qt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Np(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Np(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Np(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new mn(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Ub=location.hash,gt={hotel:{ko:"\uB354\uADF8\uB79C\uB4DC\uB86F\uB370 \uC11C\uC6B8",en:"The Grand Lotte Seoul",ja:"\u30B6\u30FB\u30B0\u30E9\u30F3\u30C9\u30ED\u30C3\u30C6 \u30BD\u30A6\u30EB",zh:"\u9996\u5C14\u5927\u4E50\u5929\u9152\u5E97"},city:{ko:"\uC774\uADF8\uC81C\uD050\uD2F0\uBE0C \uD0C0\uC6CC",en:"Executive Tower",ja:"\u30A8\u30B0\u30BC\u30AF\u30C6\u30A3\u30D6\u30BF\u30EF\u30FC",zh:"\u884C\u653F\u5854"},room:{ko:"\uD504\uB808\uC9C0\uB374\uC15C \uC2A4\uC704\uD2B8",en:"Presidential Suite",ja:"\u30D7\u30EC\u30B8\u30C7\u30F3\u30B7\u30E3\u30EB\u30B9\u30A4\u30FC\u30C8",zh:"\u603B\u7EDF\u5957\u623F"},area:255,floor:"15:00 / 11:00",bed:{ko:"\uB354\uBE14",en:"Double",ja:"\u30C0\u30D6\u30EB",zh:"\u53CC\u4EBA\u5E8A"},guests:"2",guest:"Mr. & Mrs. Kim",bookingUrl:"https://www.lottehotel.com/seoul-grand/ko/rooms/executive-tower-presidential-suite-room"},uo={ko:{"sp.foyer":"\uD604\uAD00 \xB7 \uB4DC\uB808\uC2A4\uB8F8","sp.living":"\uAC70\uC2E4","sp.dining":"\uB2E4\uC774\uB2DD","sp.bedroom":"\uCE68\uC2E4","sp.bath":"\uC695\uC2E4","sp.overview":"\uC804\uCCB4 \uD3C9\uBA74","nav.foyer":"\uD604\uAD00","nav.living":"\uAC70\uC2E4","nav.dining":"\uB2E4\uC774\uB2DD","nav.bedroom":"\uCE68\uC2E4","nav.bath":"\uC695\uC2E4","nav.overview":"\uC804\uCCB4 \uD3C9\uBA74","scene.welcome":"\uC6F0\uCEF4","scene.day":"\uB370\uC774","scene.evening":"\uC774\uBE0C\uB2DD","scene.turndown":"\uD134\uB2E4\uC6B4","scene.sleep":"\uC2AC\uB9BD","ui.scenes":"\uC870\uBA85 \uC2DC\uB098\uB9AC\uC624","ui.tour":"\uC790\uB3D9 \uD22C\uC5B4","ui.sound":"\uC0AC\uC6B4\uB4DC","ui.gyro":"\uC790\uC774\uB85C","ui.hq":"\uACE0\uD654\uC9C8","ui.sq":"\uD45C\uC900 \uD654\uC9C8","ui.info":"\uAC1D\uC2E4 \uC815\uBCF4","ui.area":"\uBA74\uC801","ui.bed":"\uCE68\uB300","ui.guests":"\uD22C\uC219 \uC778\uC6D0","ui.view":"\uC804\uB9DD","ui.floor":"\uCCB4\uD06C\uC778 / \uC544\uC6C3","ui.viewv":"\uC2DC\uD2F0 \uBDF0","ui.book":"\uC774 \uAC1D\uC2E4 \uC608\uC57D\uD558\uAE30","ui.closer":"\uAC00\uAE4C\uC774 \uBCF4\uAE30","ui.close":"\uB2EB\uAE30","ui.hint":"\uB4DC\uB798\uADF8 \u2014 \uB458\uB7EC\uBCF4\uAE30 \xB7 \uD720 \u2014 \uC90C \xB7 WASD \u2014 \uC774\uB3D9<br>\uBC14\uB2E5 \uB354\uBE14\uD074\uB9AD \u2014 \uADF8 \uC704\uCE58\uB85C \uC774\uB3D9 \xB7 \uFF0B \u2014 \uC5B4\uBA54\uB2C8\uD2F0 \uC815\uBCF4","ui.bookToast":"\uC608\uC57D \uD398\uC774\uC9C0\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4 (\uC81C\uC548\uC6A9 \uB370\uBAA8)","ui.gyroNo":"\uC774 \uD654\uBA74\uC5D0\uC11C\uB294 \uAE30\uAE30 \uBC29\uD5A5 \uC13C\uC11C\uB97C \uC4F8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154 \uC0AC\uC774\uD2B8\uC5D0 \uC62C\uB9AC\uBA74 \uB3D9\uC791\uD569\uB2C8\uB2E4.","ui.welcome":"\uD658\uC601\uD569\uB2C8\uB2E4","ui.am":["\uC288\uD37C\uD504\uB9AC\uBBF8\uC5C4 \uBCA0\uB529 (Simmons)","Gastaldi \uC774\uC9D1\uD2B8 \uCF54\uD2BC \uCE68\uAD6C","LG \uC2A4\uD0C0\uC77C\uB7EC","75\uC778\uCE58 UHD TV","\uBBF8\uB2C8\uBC14 \xB7 \uCEE4\uD53C & \uD2F0","\uCD08\uACE0\uC18D \uC778\uD130\uB137 \uBB34\uB8CC","La Cime \uB77C\uC6B4\uC9C0","\uC2DC\uD2F0 \uBDF0"]},en:{"sp.foyer":"Foyer \xB7 Dressing","sp.living":"Living Room","sp.dining":"Dining Room","sp.bedroom":"Bedroom","sp.bath":"Bathroom","sp.overview":"Floor Plan","nav.foyer":"Foyer","nav.living":"Living","nav.dining":"Dining","nav.bedroom":"Bedroom","nav.bath":"Bath","nav.overview":"Floor Plan","scene.welcome":"Welcome","scene.day":"Day","scene.evening":"Evening","scene.turndown":"Turndown","scene.sleep":"Sleep","ui.scenes":"Lighting scenes","ui.tour":"Auto tour","ui.sound":"Sound","ui.gyro":"Gyro","ui.hq":"High quality","ui.sq":"Standard","ui.info":"Room details","ui.area":"Size","ui.bed":"Bed","ui.guests":"Guests","ui.view":"View","ui.floor":"Check-in / out","ui.viewv":"City view","ui.book":"Book this room","ui.closer":"Take a closer look","ui.close":"Close","ui.hint":"Drag \u2014 look around \xB7 Scroll \u2014 zoom \xB7 WASD \u2014 walk<br>Double-click floor \u2014 move there \xB7 \uFF0B \u2014 amenity details","ui.bookToast":"Links to the booking page (proposal demo)","ui.gyroNo":"Motion sensors are blocked in this preview. They will work on the hotel site.","ui.welcome":"Welcome","ui.am":["Super-premium bedding (Simmons)","Gastaldi Egyptian cotton linens","LG Styler","75-inch UHD TV","Minibar \xB7 coffee & tea","Free high-speed internet","La Cime lounge","City view"]},ja:{"sp.foyer":"\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9 \xB7 \u30C9\u30EC\u30C3\u30B7\u30F3\u30B0","sp.living":"\u30EA\u30D3\u30F3\u30B0","sp.dining":"\u30C0\u30A4\u30CB\u30F3\u30B0","sp.bedroom":"\u30D9\u30C3\u30C9\u30EB\u30FC\u30E0","sp.bath":"\u30D0\u30B9\u30EB\u30FC\u30E0","sp.overview":"\u30D5\u30ED\u30A2\u30D7\u30E9\u30F3","nav.foyer":"\u7384\u95A2","nav.living":"\u30EA\u30D3\u30F3\u30B0","nav.dining":"\u30C0\u30A4\u30CB\u30F3\u30B0","nav.bedroom":"\u5BDD\u5BA4","nav.bath":"\u30D0\u30B9","nav.overview":"\u5168\u4F53\u56F3","scene.welcome":"\u30A6\u30A7\u30EB\u30AB\u30E0","scene.day":"\u30C7\u30A4","scene.evening":"\u30A4\u30D6\u30CB\u30F3\u30B0","scene.turndown":"\u30BF\u30FC\u30F3\u30C0\u30A6\u30F3","scene.sleep":"\u30B9\u30EA\u30FC\u30D7","ui.scenes":"\u7167\u660E\u30B7\u30FC\u30F3","ui.tour":"\u81EA\u52D5\u30C4\u30A2\u30FC","ui.sound":"\u30B5\u30A6\u30F3\u30C9","ui.gyro":"\u30B8\u30E3\u30A4\u30ED","ui.hq":"\u9AD8\u753B\u8CEA","ui.sq":"\u6A19\u6E96\u753B\u8CEA","ui.info":"\u5BA2\u5BA4\u60C5\u5831","ui.area":"\u5E83\u3055","ui.bed":"\u30D9\u30C3\u30C9","ui.guests":"\u5B9A\u54E1","ui.view":"\u773A\u671B","ui.floor":"\u30C1\u30A7\u30C3\u30AF\u30A4\u30F3 / \u30A2\u30A6\u30C8","ui.viewv":"\u30B7\u30C6\u30A3\u30D3\u30E5\u30FC","ui.book":"\u3053\u306E\u5BA2\u5BA4\u3092\u4E88\u7D04","ui.closer":"\u8FD1\u304F\u3067\u898B\u308B","ui.close":"\u9589\u3058\u308B","ui.hint":"\u30C9\u30E9\u30C3\u30B0 \u2014 \u898B\u56DE\u3059 \xB7 \u30DB\u30A4\u30FC\u30EB \u2014 \u30BA\u30FC\u30E0 \xB7 WASD \u2014 \u79FB\u52D5<br>\u5E8A\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF \u2014 \u305D\u306E\u4F4D\u7F6E\u3078 \xB7 \uFF0B \u2014 \u30A2\u30E1\u30CB\u30C6\u30A3\u60C5\u5831","ui.bookToast":"\u4E88\u7D04\u30DA\u30FC\u30B8\u3078\u79FB\u52D5\u3057\u307E\u3059\uFF08\u63D0\u6848\u7528\u30C7\u30E2\uFF09","ui.gyroNo":"\u3053\u306E\u30D7\u30EC\u30D3\u30E5\u30FC\u3067\u306F\u30E2\u30FC\u30B7\u30E7\u30F3\u30BB\u30F3\u30B5\u30FC\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002\u30DB\u30C6\u30EB\u30B5\u30A4\u30C8\u3067\u306F\u52D5\u4F5C\u3057\u307E\u3059\u3002","ui.welcome":"\u3088\u3046\u3053\u305D","ui.am":["\u30B9\u30FC\u30D1\u30FC\u30D7\u30EC\u30DF\u30A2\u30E0\u5BDD\u5177 (Simmons)","Gastaldi \u30A8\u30B8\u30D7\u30C8\u7DBF\u30EA\u30CD\u30F3","LG \u30B9\u30BF\u30A4\u30E9\u30FC","75\u30A4\u30F3\u30C1 UHD TV","\u30DF\u30CB\u30D0\u30FC \xB7 \u30B3\u30FC\u30D2\u30FC & \u30C6\u30A3\u30FC","\u9AD8\u901F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u7121\u6599","La Cime \u30E9\u30A6\u30F3\u30B8","\u30B7\u30C6\u30A3\u30D3\u30E5\u30FC"]},zh:{"sp.foyer":"\u7384\u5173 \xB7 \u8863\u5E3D\u95F4","sp.living":"\u5BA2\u5385","sp.dining":"\u9910\u5385","sp.bedroom":"\u5367\u5BA4","sp.bath":"\u6D74\u5BA4","sp.overview":"\u5E73\u9762\u56FE","nav.foyer":"\u7384\u5173","nav.living":"\u5BA2\u5385","nav.dining":"\u9910\u5385","nav.bedroom":"\u5367\u5BA4","nav.bath":"\u6D74\u5BA4","nav.overview":"\u5E73\u9762\u56FE","scene.welcome":"\u8FCE\u5BBE","scene.day":"\u65E5\u95F4","scene.evening":"\u508D\u665A","scene.turndown":"\u5F00\u591C\u5E8A","scene.sleep":"\u7761\u7720","ui.scenes":"\u706F\u5149\u573A\u666F","ui.tour":"\u81EA\u52A8\u5BFC\u89C8","ui.sound":"\u58F0\u97F3","ui.gyro":"\u9640\u87BA\u4EEA","ui.hq":"\u9AD8\u753B\u8D28","ui.sq":"\u6807\u51C6\u753B\u8D28","ui.info":"\u5BA2\u623F\u4FE1\u606F","ui.area":"\u9762\u79EF","ui.bed":"\u5E8A\u578B","ui.guests":"\u5165\u4F4F\u4EBA\u6570","ui.view":"\u666F\u89C2","ui.floor":"\u5165\u4F4F / \u9000\u623F","ui.viewv":"\u57CE\u5E02\u666F\u89C2","ui.book":"\u9884\u8BA2\u6B64\u5BA2\u623F","ui.closer":"\u8FD1\u8DDD\u79BB\u67E5\u770B","ui.close":"\u5173\u95ED","ui.hint":"\u62D6\u52A8 \u2014 \u73AF\u89C6 \xB7 \u6EDA\u8F6E \u2014 \u7F29\u653E \xB7 WASD \u2014 \u79FB\u52A8<br>\u53CC\u51FB\u5730\u9762 \u2014 \u79FB\u52A8\u5230\u8BE5\u5904 \xB7 \uFF0B \u2014 \u8BBE\u65BD\u4FE1\u606F","ui.bookToast":"\u5C06\u8DF3\u8F6C\u81F3\u9884\u8BA2\u9875\u9762\uFF08\u63D0\u6848\u6F14\u793A\uFF09","ui.gyroNo":"\u6B64\u9884\u89C8\u4E2D\u65E0\u6CD5\u4F7F\u7528\u8FD0\u52A8\u4F20\u611F\u5668\uFF0C\u53D1\u5E03\u5230\u9152\u5E97\u7F51\u7AD9\u540E\u5373\u53EF\u4F7F\u7528\u3002","ui.welcome":"\u6B22\u8FCE","ui.am":["\u8D85\u9AD8\u7EA7\u5E8A\u57AB\u7CFB\u7EDF (Simmons)","Gastaldi \u57C3\u53CA\u68C9\u5E8A\u54C1","LG Styler \u8863\u7269\u62A4\u7406\u673A","75\u82F1\u5BF8 UHD \u7535\u89C6","\u8FF7\u4F60\u5427 \xB7 \u5496\u5561\u4E0E\u8336","\u514D\u8D39\u9AD8\u901F\u7F51\u7EDC","La Cime \u884C\u653F\u9152\u5ECA","\u57CE\u5E02\u666F\u89C2"]}},fo={entry:{ko:["La Cime \uB77C\uC6B4\uC9C0 \uD61C\uD0DD","\uC870\uC2DD 06:30\u201310:00, \uC560\uD504\uD130\uB208 \uD2F0 15:00\u201317:00, \uD574\uD53C\uC544\uC6CC 18:00\u201320:00, \uBBF8\uD305\uB8F8 2\uC2DC\uAC04 \uBB34\uB8CC \uC774\uC6A9(6\xB712\uC778\uC2E4)."],en:["La Cime lounge access","Breakfast 06:30\u201310:00, afternoon tea 15:00\u201317:00, happy hour 18:00\u201320:00, and a meeting room free for two hours."],ja:["La Cime \u30E9\u30A6\u30F3\u30B8\u7279\u5178","\u671D\u98DF 06:30\u201310:00\u3001\u30A2\u30D5\u30BF\u30CC\u30FC\u30F3\u30C6\u30A3\u30FC 15:00\u201317:00\u3001\u30CF\u30C3\u30D4\u30FC\u30A2\u30EF\u30FC 18:00\u201320:00\u3001\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u30EB\u30FC\u30E02\u6642\u9593\u7121\u6599\u3002"],zh:["La Cime \u884C\u653F\u9152\u5ECA\u793C\u9047","\u65E9\u9910 06:30\u201310:00\uFF0C\u4E0B\u5348\u8336 15:00\u201317:00\uFF0C\u6B22\u4E50\u65F6\u5149 18:00\u201320:00\uFF0C\u4F1A\u8BAE\u5BA4\u514D\u8D39\u4F7F\u75282\u5C0F\u65F6\u3002"]},closet:{ko:["\uB4DC\uB808\uC2A4\uB8F8 & LG \uC2A4\uD0C0\uC77C\uB7EC","LG \uC2A4\uD0C0\uC77C\uB7EC\uC640 \uBAA9\uC695 \uAC00\uC6B4, \uC2AC\uB9AC\uD37C, \uAC1C\uC778 \uAE08\uACE0, \uAD6C\uB463\uC8FC\uAC71\uC744 \uAC16\uCD98 \uB4DC\uB808\uC2A4\uB8F8\uC785\uB2C8\uB2E4."],en:["Dressing room & LG Styler","An LG Styler with robes, slippers, an in-room safe and a shoehorn."],ja:["\u30C9\u30EC\u30B9\u30EB\u30FC\u30E0 & LG \u30B9\u30BF\u30A4\u30E9\u30FC","LG \u30B9\u30BF\u30A4\u30E9\u30FC\u3001\u30D0\u30B9\u30ED\u30FC\u30D6\u3001\u30B9\u30EA\u30C3\u30D1\u3001\u91D1\u5EAB\u3001\u9774\u3079\u3089\u3092\u5099\u3048\u305F\u30C9\u30EC\u30B9\u30EB\u30FC\u30E0\u3002"],zh:["\u8863\u5E3D\u95F4 & LG Styler","\u914D\u6709 LG Styler \u8863\u7269\u62A4\u7406\u673A\u3001\u6D74\u888D\u3001\u62D6\u978B\u3001\u4FDD\u9669\u7BB1\u4E0E\u978B\u62D4\u3002"]},view:{ko:["\uC11C\uC6B8 \uB3C4\uC2EC \uC2DC\uD2F0 \uBDF0","\uB300\uD615 \uC720\uB9AC\uCC3D\uC744 \uD1B5\uD574 \uC11C\uC6B8 \uC2DC\uB0B4\uB97C \uD55C\uB208\uC5D0 \uB0B4\uB824\uB2E4\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."],en:["City view","Large windows look out over the heart of Seoul."],ja:["\u30B7\u30C6\u30A3\u30D3\u30E5\u30FC","\u5927\u304D\u306A\u7A93\u304B\u3089\u30BD\u30A6\u30EB\u90FD\u5FC3\u3092\u4E00\u671B\u3067\u304D\u307E\u3059\u3002"],zh:["\u57CE\u5E02\u666F\u89C2","\u900F\u8FC7\u5927\u578B\u843D\u5730\u7A97\u4FEF\u77B0\u9996\u5C14\u5E02\u4E2D\u5FC3\u3002"]},lounge:{ko:["\uB77C\uC6B4\uC9C0 & \uD06C\uB9AC\uC2A4\uD138 \uC0F9\uB4E4\uB9AC\uC5D0","\uCD5C\uB300 6\uC778\uC774 \uBA38\uBB3C \uC218 \uC788\uB294 \uC751\uC811 \uACF5\uAC04. \uB9C8\uBE14 \uCEE4\uD53C \uD14C\uC774\uBE14\uACFC \uBE14\uB799 \uC250\uC774\uB4DC \uC0F9\uB4E4\uB9AC\uC5D0."],en:["Lounge","Seating for up to six beneath a black-shade chandelier, around a marble coffee table."],ja:["\u30E9\u30A6\u30F3\u30B8","\u6700\u59276\u540D\u304C\u304F\u3064\u308D\u3052\u308B\u5FDC\u63A5\u30B9\u30DA\u30FC\u30B9\u3002\u5927\u7406\u77F3\u306E\u30B3\u30FC\u30D2\u30FC\u30C6\u30FC\u30D6\u30EB\u3068\u30D6\u30E9\u30C3\u30AF\u30B7\u30A7\u30FC\u30C9\u306E\u30B7\u30E3\u30F3\u30C7\u30EA\u30A2\u3002"],zh:["\u4F1A\u5BA2\u533A","\u53EF\u5BB9\u7EB3\u516D\u4EBA\u7684\u4F1A\u5BA2\u7A7A\u95F4\uFF0C\u914D\u5927\u7406\u77F3\u5496\u5561\u684C\u4E0E\u9ED1\u8272\u706F\u7F69\u540A\u706F\u3002"]},dining:{ko:["8\uC778 \uD504\uB77C\uC774\uBE57 \uB2E4\uC774\uB2DD","\uC778\uB8F8 \uB2E4\uC774\uB2DD\uACFC \uC170\uD504 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 8\uC778 \uD14C\uC774\uBE14\uC785\uB2C8\uB2E4."],en:["Private dining for eight","An eight-seat table for in-room dining and private chef service."],ja:["8\u540D\u7528\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30C0\u30A4\u30CB\u30F3\u30B0","\u30A4\u30F3\u30EB\u30FC\u30E0\u30C0\u30A4\u30CB\u30F3\u30B0\u3084\u30B7\u30A7\u30D5\u30B5\u30FC\u30D3\u30B9\u306B\u5BFE\u5FDC\u3059\u308B8\u540D\u7528\u30C6\u30FC\u30D6\u30EB\u3002"],zh:["\u516B\u4EBA\u79C1\u4EAB\u9910\u5385","\u53EF\u4EAB\u7528\u5BA2\u623F\u9001\u9910\u4E0E\u79C1\u53A8\u670D\u52A1\u7684\u516B\u4EBA\u9910\u684C\u3002"]},lattice:{ko:["\uC804\uD1B5 \uCC3D\uC0B4 \uBAA8\uD2F0\uD504 \uC6D4","\uD55C\uC625 \uCC3D\uC0B4\uC5D0\uC11C \uC601\uAC10\uC744 \uBC1B\uC740 \uC785\uCCB4 \uD328\uB110\uC5D0 \uAC04\uC811\uC870\uBA85\uC774 \uBE44\uCE69\uB2C8\uB2E4."],en:["Lattice feature wall","A sculpted panel inspired by traditional Korean window lattice, washed with soft light."],ja:["\u4F1D\u7D71\u683C\u5B50\u30E2\u30C1\u30FC\u30D5\u306E\u58C1","\u97D3\u5C4B\u306E\u7A93\u683C\u5B50\u306B\u7740\u60F3\u3092\u5F97\u305F\u7ACB\u4F53\u30D1\u30CD\u30EB\u3092\u9593\u63A5\u7167\u660E\u304C\u7167\u3089\u3057\u307E\u3059\u3002"],zh:["\u4F20\u7EDF\u7A97\u68C2\u4E3B\u9898\u5899","\u7075\u611F\u6E90\u81EA\u97E9\u5C4B\u7A97\u68C2\u7684\u7ACB\u4F53\u5899\u677F\uFF0C\u8F85\u4EE5\u67D4\u548C\u6D17\u5899\u706F\u3002"]},minibar:{ko:["\uBBF8\uB2C8\uBC14 & \uCEE4\uD53C\xB7\uD2F0 \uBA54\uC774\uCEE4","\uBBF8\uB2C8\uBC14\uC640 \uCEE4\uD53C\xB7\uD2F0 \uBA54\uC774\uCEE4, \uD2F0\uD3EC\uD2B8, \uB9E4\uC77C 2\uBCD1\uC758 \uBB34\uB8CC \uC0DD\uC218\uB97C \uC900\uBE44\uD588\uC2B5\uB2C8\uB2E4."],en:["Minibar & coffee and tea","A minibar, coffee and tea maker, tea pot, and two complimentary bottles of water daily."],ja:["\u30DF\u30CB\u30D0\u30FC & \u30B3\u30FC\u30D2\u30FC\u30FB\u30C6\u30A3\u30FC\u30E1\u30FC\u30AB\u30FC","\u30DF\u30CB\u30D0\u30FC\u3001\u30B3\u30FC\u30D2\u30FC\u30FB\u30C6\u30A3\u30FC\u30E1\u30FC\u30AB\u30FC\u3001\u30C6\u30A3\u30FC\u30DD\u30C3\u30C8\u3001\u6BCE\u65E52\u672C\u306E\u7121\u6599\u30DF\u30CD\u30E9\u30EB\u30A6\u30A9\u30FC\u30BF\u30FC\u3002"],zh:["\u8FF7\u4F60\u5427 & \u5496\u5561\u8336\u5177","\u8FF7\u4F60\u5427\u3001\u5496\u5561\u4E0E\u8336\u5177\u3001\u8336\u58F6\uFF0C\u6BCF\u65E5\u514D\u8D39\u63D0\u4F9B\u4E24\u74F6\u996E\u7528\u6C34\u3002"]},bed:{ko:["\uC288\uD37C\uD504\uB9AC\uBBF8\uC5C4 \uBCA0\uB529 \uC2DC\uC2A4\uD15C","Simmons\uC640 \uACF5\uB3D9 \uAC1C\uBC1C\uD55C \uCE68\uB300\uC5D0 \uC774\uD0C8\uB9AC\uC544 Gastaldi\uC758 \uC774\uC9D1\uD2B8 \uCF54\uD2BC \uCE68\uAD6C\uB97C \uB354\uD588\uC2B5\uB2C8\uB2E4."],en:["Super-premium bedding","A bed co-developed with Simmons, dressed in Gastaldi Egyptian cotton linens made in Italy."],ja:["\u30B9\u30FC\u30D1\u30FC\u30D7\u30EC\u30DF\u30A2\u30E0\u5BDD\u5177","Simmons \u3068\u5171\u540C\u958B\u767A\u3057\u305F\u30D9\u30C3\u30C9\u306B\u3001\u30A4\u30BF\u30EA\u30A2 Gastaldi \u306E\u30A8\u30B8\u30D7\u30C8\u7DBF\u30EA\u30CD\u30F3\u3002"],zh:["\u8D85\u9AD8\u7EA7\u5E8A\u57AB\u7CFB\u7EDF","\u4E0E Simmons \u8054\u5408\u5F00\u53D1\u7684\u5E8A\u57AB\uFF0C\u642D\u914D\u610F\u5927\u5229 Gastaldi \u57C3\u53CA\u68C9\u5E8A\u54C1\u3002"]},panel:{ko:["\uAC1D\uC2E4 \uC870\uBA85 \uD328\uB110","\uC6F0\uCEF4\uBD80\uD130 \uC2AC\uB9BD\uAE4C\uC9C0, \uD558\uB098\uC758 \uD328\uB110\uB85C \uAC1D\uC2E4 \uC870\uBA85\uACFC \uCEE4\uD2BC\uC744 \uC2DC\uB098\uB9AC\uC624\uBCC4\uB85C \uBC14\uAFC9\uB2C8\uB2E4."],en:["In-room lighting panel","From welcome to sleep, one panel changes the lights and curtains by scene."],ja:["\u5BA2\u5BA4\u7167\u660E\u30D1\u30CD\u30EB","\u30A6\u30A7\u30EB\u30AB\u30E0\u304B\u3089\u30B9\u30EA\u30FC\u30D7\u307E\u3067\u3001\u7167\u660E\u3068\u30AB\u30FC\u30C6\u30F3\u3092\u30B7\u30FC\u30F3\u3054\u3068\u306B\u5207\u308A\u66FF\u3048\u3002"],zh:["\u5BA2\u623F\u706F\u5149\u9762\u677F","\u4ECE\u8FCE\u5BBE\u5230\u7761\u7720\uFF0C\u4E00\u4E2A\u9762\u677F\u5373\u53EF\u6309\u573A\u666F\u5207\u6362\u706F\u5149\u4E0E\u7A97\u5E18\u3002"]},desk:{ko:["\uC5C5\uBB34 \uB370\uC2A4\uD06C","\uC720\uC120\xB7\uC640\uC774\uD30C\uC774 \uCD08\uACE0\uC18D \uC778\uD130\uB137\uC744 \uBB34\uB8CC\uB85C \uC81C\uACF5\uD558\uACE0, \uBCF4\uC774\uC2A4 \uBA54\uC77C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."],en:["Work desk","Free high-speed wired and Wi-Fi internet, with voice mail service."],ja:["\u30EF\u30FC\u30AF\u30C7\u30B9\u30AF","\u6709\u7DDA\u30FBWi-Fi \u306E\u9AD8\u901F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u7121\u6599\u3001\u30DC\u30A4\u30B9\u30E1\u30FC\u30EB\u30B5\u30FC\u30D3\u30B9\u4ED8\u304D\u3002"],zh:["\u529E\u516C\u684C","\u514D\u8D39\u9AD8\u901F\u6709\u7EBF\u53CA\u65E0\u7EBF\u7F51\u7EDC\uFF0C\u5E76\u63D0\u4F9B\u8BED\u97F3\u4FE1\u7BB1\u670D\u52A1\u3002"]},nook:{ko:["\uB9AC\uB529 \uCF54\uB108","\uD050\uB808\uC774\uC158\uB41C \uBD81 \uC140\uB809\uC158\uACFC \uB3C5\uC11C\uB4F1, \uC554\uCCB4\uC5B4\uAC00 \uC788\uB294 \uC870\uC6A9\uD55C \uCF54\uB108\uC785\uB2C8\uB2E4."],en:["Reading nook","A quiet corner with a curated library, reading lamp and armchair."],ja:["\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30B3\u30FC\u30CA\u30FC","\u53B3\u9078\u3055\u308C\u305F\u672C\u3068\u8AAD\u66F8\u706F\u3001\u30A2\u30FC\u30E0\u30C1\u30A7\u30A2\u306E\u3042\u308B\u9759\u304B\u306A\u30B3\u30FC\u30CA\u30FC\u3002"],zh:["\u9605\u8BFB\u89D2","\u914D\u6709\u7CBE\u9009\u85CF\u4E66\u3001\u9605\u8BFB\u706F\u4E0E\u6276\u624B\u6905\u7684\u9759\u8C27\u89D2\u843D\u3002"]},tub:{ko:["\uC2DC\uD2F0 \uBDF0 \uC695\uC870","\uCC3D\uAC00 \uD504\uB9AC\uC2A4\uD0E0\uB529 \uC695\uC870\uC5D0\uC11C \uB3C4\uC2DC \uC57C\uACBD\uC744 \uBC14\uB77C\uBCF4\uBA70 \uBC18\uC2E0\uC695\uC744 \uC990\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4."],en:["Bath with a view","A freestanding tub by the window, facing the city lights."],ja:["\u30D3\u30E5\u30FC\u30D0\u30B9","\u7A93\u8FBA\u306E\u72EC\u7ACB\u578B\u30D0\u30B9\u30BF\u30D6\u304B\u3089\u8857\u306E\u591C\u666F\u3092\u773A\u3081\u3066\u3002"],zh:["\u89C2\u666F\u6D74\u7F38","\u7A97\u8FB9\u7684\u72EC\u7ACB\u5F0F\u6D74\u7F38\uFF0C\u53EF\u8FB9\u6CE1\u6FA1\u8FB9\u6B23\u8D4F\u57CE\u5E02\u591C\u666F\u3002"]},shower:{ko:["\uB808\uC778 \uC0E4\uC6CC","\uCC9C\uC7A5\uD615 \uB808\uC778 \uC0E4\uC6CC\uC640 \uD578\uB4DC \uC0E4\uC6CC, \uB300\uB9AC\uC11D \uBCA4\uCE58\uAC00 \uC788\uB294 \uC720\uB9AC \uBD80\uC2A4\uC785\uB2C8\uB2E4."],en:["Rain shower","A glass enclosure with ceiling rain head, hand shower and marble bench."],ja:["\u30EC\u30A4\u30F3\u30B7\u30E3\u30EF\u30FC","\u5929\u4E95\u57CB\u3081\u8FBC\u307F\u306E\u30EC\u30A4\u30F3\u30B7\u30E3\u30EF\u30FC\u3001\u30CF\u30F3\u30C9\u30B7\u30E3\u30EF\u30FC\u3001\u5927\u7406\u77F3\u30D9\u30F3\u30C1\u4ED8\u304D\u3002"],zh:["\u96E8\u6DCB\u82B1\u6D12","\u914D\u6709\u9876\u55B7\u82B1\u6D12\u3001\u624B\u6301\u82B1\u6D12\u4E0E\u5927\u7406\u77F3\u957F\u51F3\u7684\u73BB\u7483\u6DCB\u6D74\u95F4\u3002"]},vanity:{ko:["\uBCA0\uB2C8\uD2F0 & \uC695\uC2E4 \uC5B4\uBA54\uB2C8\uD2F0","\uC695\uC2E4 \uC5B4\uBA54\uB2C8\uD2F0\uC640 \uBAA9\uC695 \uAC00\uC6B4, \uD5E4\uC5B4\uB4DC\uB77C\uC774\uC5B4, \uBE44\uB370. Re:think \uCEA0\uD398\uC778\uC73C\uB85C \uC77C\uD68C\uC6A9 \uCE6B\uC194\xB7\uBA74\uB3C4\uAE30\uB294 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."],en:["Vanity & bath amenities","Bath amenities, robes, hair dryer and bidet. Single-use toothbrushes and razors are not provided under the Re:think campaign."],ja:["\u6D17\u9762\u53F0 & \u30D0\u30B9\u30A2\u30E1\u30CB\u30C6\u30A3","\u30D0\u30B9\u30A2\u30E1\u30CB\u30C6\u30A3\u3001\u30D0\u30B9\u30ED\u30FC\u30D6\u3001\u30D8\u30A2\u30C9\u30E9\u30A4\u30E4\u30FC\u3001\u30D3\u30C7\u3002Re:think \u30AD\u30E3\u30F3\u30DA\u30FC\u30F3\u306B\u3088\u308A\u4F7F\u3044\u6368\u3066\u6B6F\u30D6\u30E9\u30B7\u30FB\u30AB\u30DF\u30BD\u30EA\u306F\u63D0\u4F9B\u3057\u3066\u3044\u307E\u305B\u3093\u3002"],zh:["\u6D17\u624B\u53F0 & \u536B\u6D74\u7528\u54C1","\u536B\u6D74\u7528\u54C1\u3001\u6D74\u888D\u3001\u5439\u98CE\u673A\u4E0E\u667A\u80FD\u9A6C\u6876\u3002\u54CD\u5E94 Re:think \u73AF\u4FDD\u6D3B\u52A8\uFF0C\u4E0D\u63D0\u4F9B\u4E00\u6B21\u6027\u7259\u5237\u4E0E\u5243\u987B\u5200\u3002"]}};Object.assign(uo.ko,{"ui.skip":"\uAC74\uB108\uB6F0\uAE30","ui.opening":"\uC624\uD504\uB2DD \uC5F0\uCD9C","op.signature":"\uC2DC\uADF8\uB2C8\uCC98","op.welcome":"\uC6F0\uCEF4 \uCE74\uB4DC","op.arrival":"\uB3C4\uCC29","op.plan":"\uD3C9\uBA74\uB3C4","op.city":"\uC2DC\uD2F0 \uBDF0","op.timelapse":"\uBC24 \u2192 \uC544\uCE68","op.tl":"\uBC24\uC5D0\uC11C \uC544\uCE68\uC73C\uB85C, \uC870\uBA85 \uC2DC\uB098\uB9AC\uC624","ui.privacy":"\uBC29\uBB38 \uD1B5\uACC4 \uC548\uB0B4: \uC81C\uC548 \uD6C4\uC18D \uC548\uB0B4\uB97C \uC704\uD574 \uC5F4\uB78C \uC5EC\uBD80\uC640 \uB458\uB7EC\uBCF8 \uACF5\uAC04\uC744 \uC775\uBA85 \uD1B5\uACC4\uB85C \uC218\uC9D1\uD569\uB2C8\uB2E4 (Vercel Web Analytics \xB7 \uCD94\uC801 \uCFE0\uD0A4 \uC5C6\uC74C).","ui.plan":"\uD3C9\uBA74\uB3C4","ui.tourStart":"\uAC00\uC774\uB4DC \uD22C\uC5B4","ui.explore":"\uC9C1\uC811 \uB458\uB7EC\uBCF4\uAE30","ui.quality":"\uD654\uC9C8","ui.fs":"\uC804\uCCB4\uD654\uBA74","ui.perf":"\uC131\uB2A5 \uC815\uBCF4","ui.exit":"\uD22C\uC5B4 \uC885\uB8CC","ui.bookShort":"\uC608\uC57D","ui.hintShort":"\uB4DC\uB798\uADF8\uB85C \uB458\uB7EC\uBCF4\uACE0, \uBC14\uB2E5\uC744 \uB354\uBE14\uD074\uB9AD\uD558\uBA74 \uC774\uB3D9\uD569\uB2C8\uB2E4. \uFF0B\uB97C \uB204\uB974\uBA74 \uC5B4\uBA54\uB2C8\uD2F0 \uC815\uBCF4\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.","ui.hqv":"\uACE0\uD654\uC9C8","ui.sqv":"\uD45C\uC900","load.tex":"\uC7AC\uC9C8\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","load.arch":"\uACF5\uAC04\uC744 \uAD6C\uC131\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","load.furn":"\uAC00\uAD6C\uB97C \uBC30\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","load.light":"\uC870\uBA85\uC744 \uB9DE\uCD94\uACE0 \uC788\uC2B5\uB2C8\uB2E4","load.shader":"\uB80C\uB354\uB9C1\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4","tour.foyer":"\uBB38\uC744 \uC5F4\uBA74 \uD39C\uB358\uD2B8 \uC870\uBA85\uACFC \uC6CC\uD06C\uC778 \uD074\uB85C\uC9D3\uC774 \uBA3C\uC800 \uB9DE\uC774\uD569\uB2C8\uB2E4.","tour.living":"\uC11C\uC6B8 \uB3C4\uC2EC\uC744 \uD5A5\uD55C \uB300\uD615 \uCC3D\uACFC 6\uC778 \uB77C\uC6B4\uC9C0\uAC00 \uC788\uB294 \uAC70\uC2E4\uC785\uB2C8\uB2E4.","tour.dining":"8\uC778 \uD14C\uC774\uBE14\uACFC \uD55C\uC625 \uCC3D\uC0B4 \uBAA8\uD2F0\uD504 \uC6D4, \uBBF8\uB2C8\uBC14\uB97C \uAC16\uCD98 \uB2E4\uC774\uB2DD\uC785\uB2C8\uB2E4.","tour.bedroom":"\uD574\uAC00 \uC9C0\uBA74 \uAC1D\uC2E4\uC740 \uB530\uB73B\uD55C \uAC04\uC811\uC870\uBA85\uC758 \uC774\uBE0C\uB2DD \uBAA8\uB4DC\uB85C \uBC14\uB01D\uB2C8\uB2E4.","tour.bath":"\uB300\uB9AC\uC11D \uC695\uC2E4\uC5D0\uB294 \uCC3D\uAC00 \uC695\uC870\uC640 \uB808\uC778 \uC0E4\uC6CC, \uB354\uBE14 \uBCA0\uB2C8\uD2F0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.","tour.turndown":"\uD134\uB2E4\uC6B4 \uC11C\uBE44\uC2A4 \u2014 \uCEE4\uD2BC\uC774 \uB2EB\uD788\uACE0 \uCE68\uAD6C\uAC00 \uC815\uB3C8\uB418\uBA70 \uC2AC\uB9AC\uD37C\uAC00 \uC900\uBE44\uB429\uB2C8\uB2E4.","tour.end":"\uC57D {area}\u33A1\uC758 \uC2A4\uC704\uD2B8 \uC804\uCCB4\uB97C \uD55C\uB208\uC5D0 \uBD05\uB2C8\uB2E4."});Object.assign(uo.en,{"ui.skip":"Skip","ui.opening":"Opening","op.signature":"Signature","op.welcome":"Welcome card","op.arrival":"Arrival","op.plan":"Floor plan","op.city":"City view","op.timelapse":"Night \u2192 morning","op.tl":"From night to morning \u2014 lighting scenes","ui.privacy":"Visit statistics: whether this demo was opened and which spaces were viewed are collected anonymously (Vercel Web Analytics, no tracking cookies).","ui.plan":"Floor plan","ui.tourStart":"Guided tour","ui.explore":"Explore freely","ui.quality":"Quality","ui.fs":"Full screen","ui.perf":"Performance","ui.exit":"End tour","ui.bookShort":"Book","ui.hintShort":"Drag to look around and double-click the floor to move. Tap \uFF0B for amenity details.","ui.hqv":"High","ui.sqv":"Standard","load.tex":"Preparing materials","load.arch":"Building the rooms","load.furn":"Placing the furniture","load.light":"Setting the lights","load.shader":"Preparing the renderer","tour.foyer":"Step inside to a pendant-lit foyer and a walk-in closet.","tour.living":"The living room: large windows over central Seoul and a lounge for six.","tour.dining":"Dining for eight, a lattice feature wall and the minibar.","tour.bedroom":"As the sun sets, the room shifts to warm evening lighting.","tour.bath":"The marble bathroom has a window-side tub, rain shower and twin vanity.","tour.turndown":"Turndown \u2014 curtains close, the bed is turned down, slippers set out.","tour.end":"The whole {area} m\xB2 suite at a glance."});Object.assign(uo.ja,{"ui.skip":"\u30B9\u30AD\u30C3\u30D7","ui.opening":"\u30AA\u30FC\u30D7\u30CB\u30F3\u30B0","op.signature":"\u30B7\u30B0\u30CD\u30C1\u30E3\u30FC","op.welcome":"\u30A6\u30A7\u30EB\u30AB\u30E0\u30AB\u30FC\u30C9","op.arrival":"\u5230\u7740","op.plan":"\u30D5\u30ED\u30A2\u30D7\u30E9\u30F3","op.city":"\u30B7\u30C6\u30A3\u30D3\u30E5\u30FC","op.timelapse":"\u591C \u2192 \u671D","op.tl":"\u591C\u304B\u3089\u671D\u3078 \u2014 \u7167\u660E\u30B7\u30FC\u30F3","ui.privacy":"\u95B2\u89A7\u7D71\u8A08\u306B\u3064\u3044\u3066\uFF1A\u95B2\u89A7\u306E\u6709\u7121\u3068\u898B\u305F\u30B9\u30DA\u30FC\u30B9\u3092\u533F\u540D\u306E\u7D71\u8A08\u3068\u3057\u3066\u53CE\u96C6\u3057\u307E\u3059\uFF08Vercel Web Analytics\u30FB\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0Cookie\u306A\u3057\uFF09\u3002","ui.plan":"\u30D5\u30ED\u30A2\u30D7\u30E9\u30F3","ui.tourStart":"\u30AC\u30A4\u30C9\u30C4\u30A2\u30FC","ui.explore":"\u81EA\u7531\u306B\u898B\u308B","ui.quality":"\u753B\u8CEA","ui.fs":"\u5168\u753B\u9762","ui.perf":"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9","ui.exit":"\u30C4\u30A2\u30FC\u7D42\u4E86","ui.bookShort":"\u4E88\u7D04","ui.hintShort":"\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3057\u3001\u5E8A\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3067\u79FB\u52D5\u3002\uFF0B\u3067\u30A2\u30E1\u30CB\u30C6\u30A3\u60C5\u5831\u3092\u8868\u793A\u3057\u307E\u3059\u3002","ui.hqv":"\u9AD8","ui.sqv":"\u6A19\u6E96","load.tex":"\u7D20\u6750\u3092\u6E96\u5099\u3057\u3066\u3044\u307E\u3059","load.arch":"\u7A7A\u9593\u3092\u69CB\u6210\u3057\u3066\u3044\u307E\u3059","load.furn":"\u5BB6\u5177\u3092\u914D\u7F6E\u3057\u3066\u3044\u307E\u3059","load.light":"\u7167\u660E\u3092\u8ABF\u6574\u3057\u3066\u3044\u307E\u3059","load.shader":"\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3092\u6E96\u5099\u3057\u3066\u3044\u307E\u3059","tour.foyer":"\u6249\u3092\u958B\u3051\u308B\u3068\u3001\u30DA\u30F3\u30C0\u30F3\u30C8\u7167\u660E\u3068\u30A6\u30A9\u30FC\u30AF\u30A4\u30F3\u30AF\u30ED\u30FC\u30BC\u30C3\u30C8\u304C\u304A\u8FCE\u3048\u3057\u307E\u3059\u3002","tour.living":"\u30BD\u30A6\u30EB\u90FD\u5FC3\u3092\u671B\u3080\u5927\u304D\u306A\u7A93\u30686\u540D\u306E\u30E9\u30A6\u30F3\u30B8\u304C\u3042\u308B\u30EA\u30D3\u30F3\u30B0\u3002","tour.dining":"8\u540D\u7528\u30C6\u30FC\u30D6\u30EB\u3001\u683C\u5B50\u30E2\u30C1\u30FC\u30D5\u306E\u58C1\u3001\u30DF\u30CB\u30D0\u30FC\u3092\u5099\u3048\u305F\u30C0\u30A4\u30CB\u30F3\u30B0\u3002","tour.bedroom":"\u65E5\u304C\u66AE\u308C\u308B\u3068\u3001\u5BA2\u5BA4\u306F\u6E29\u304B\u306A\u9593\u63A5\u7167\u660E\u306E\u30A4\u30D6\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9\u306B\u3002","tour.bath":"\u5927\u7406\u77F3\u306E\u30D0\u30B9\u30EB\u30FC\u30E0\u306B\u306F\u7A93\u8FBA\u306E\u30D0\u30B9\u30BF\u30D6\u3001\u30EC\u30A4\u30F3\u30B7\u30E3\u30EF\u30FC\u3001\u30C0\u30D6\u30EB\u30B7\u30F3\u30AF\u3002","tour.turndown":"\u30BF\u30FC\u30F3\u30C0\u30A6\u30F3 \u2014 \u30AB\u30FC\u30C6\u30F3\u304C\u9589\u307E\u308A\u3001\u5BDD\u5177\u304C\u6574\u3044\u3001\u30B9\u30EA\u30C3\u30D1\u304C\u7528\u610F\u3055\u308C\u307E\u3059\u3002","tour.end":"\u7D04{area}\u33A1\u306E\u30B9\u30A4\u30FC\u30C8\u5168\u4F53\u3092\u4E00\u671B\u3002"});Object.assign(uo.zh,{"ui.skip":"\u8DF3\u8FC7","ui.opening":"\u5F00\u573A","op.signature":"\u62DB\u724C","op.welcome":"\u6B22\u8FCE\u5361","op.arrival":"\u62B5\u8FBE","op.plan":"\u5E73\u9762\u56FE","op.city":"\u57CE\u5E02\u666F\u89C2","op.timelapse":"\u591C \u2192 \u6668","op.tl":"\u4ECE\u591C\u665A\u5230\u6E05\u6668\u2014\u2014\u706F\u5149\u573A\u666F","ui.privacy":"\u8BBF\u95EE\u7EDF\u8BA1\u8BF4\u660E\uFF1A\u6211\u4EEC\u4EE5\u533F\u540D\u65B9\u5F0F\u7EDF\u8BA1\u662F\u5426\u6253\u5F00\u672C\u6F14\u793A\u53CA\u6D4F\u89C8\u7684\u7A7A\u95F4\uFF08Vercel Web Analytics\uFF0C\u4E0D\u4F7F\u7528\u8DDF\u8E2A Cookie\uFF09\u3002","ui.plan":"\u5E73\u9762\u56FE","ui.tourStart":"\u5BFC\u89C8","ui.explore":"\u81EA\u7531\u6D4F\u89C8","ui.quality":"\u753B\u8D28","ui.fs":"\u5168\u5C4F","ui.perf":"\u6027\u80FD\u4FE1\u606F","ui.exit":"\u7ED3\u675F\u5BFC\u89C8","ui.bookShort":"\u9884\u8BA2","ui.hintShort":"\u62D6\u52A8\u73AF\u89C6\uFF0C\u53CC\u51FB\u5730\u9762\u79FB\u52A8\uFF0C\u70B9\u51FB\uFF0B\u67E5\u770B\u8BBE\u65BD\u4FE1\u606F\u3002","ui.hqv":"\u9AD8","ui.sqv":"\u6807\u51C6","load.tex":"\u6B63\u5728\u51C6\u5907\u6750\u8D28","load.arch":"\u6B63\u5728\u6784\u5EFA\u7A7A\u95F4","load.furn":"\u6B63\u5728\u5E03\u7F6E\u5BB6\u5177","load.light":"\u6B63\u5728\u8C03\u6574\u706F\u5149","load.shader":"\u6B63\u5728\u51C6\u5907\u6E32\u67D3","tour.foyer":"\u63A8\u95E8\u800C\u5165\uFF0C\u540A\u706F\u4E0E\u6B65\u5165\u5F0F\u8863\u5E3D\u95F4\u7387\u5148\u8FCE\u63A5\u60A8\u3002","tour.living":"\u5BA2\u5385\u62E5\u6709\u4FEF\u77B0\u9996\u5C14\u5E02\u4E2D\u5FC3\u7684\u5927\u578B\u7A97\u6237\u548C\u516D\u4EBA\u4F1A\u5BA2\u533A\u3002","tour.dining":"\u914D\u6709\u516B\u4EBA\u9910\u684C\u3001\u7A97\u68C2\u4E3B\u9898\u5899\u4E0E\u8FF7\u4F60\u5427\u7684\u9910\u5385\u3002","tour.bedroom":"\u65E5\u843D\u4E4B\u540E\uFF0C\u5BA2\u623F\u5207\u6362\u4E3A\u6E29\u6696\u7684\u508D\u665A\u706F\u5149\u6A21\u5F0F\u3002","tour.bath":"\u5927\u7406\u77F3\u6D74\u5BA4\u914D\u6709\u7A97\u8FB9\u6D74\u7F38\u3001\u96E8\u6DCB\u82B1\u6D12\u4E0E\u53CC\u6D17\u624B\u53F0\u3002","tour.turndown":"\u5F00\u591C\u5E8A\u670D\u52A1 \u2014 \u7A97\u5E18\u95ED\u5408\u3001\u5E8A\u54C1\u6574\u7406\u3001\u62D6\u978B\u5907\u597D\u3002","tour.end":"\u4E00\u89C8\u7EA6{area}\u33A1\u7684\u6574\u5957\u5957\u623F\u3002"});var Cn="ko",Tt=n=>uo[Cn][n]??uo.en[n]??n,Pn=n=>typeof n=="object"?n[Cn]??n.en:n;window.__stages=[];var w_=performance.now(),ci=(n,e)=>{window.__stages.push([n,Math.round(performance.now()-w_)]);let t=document.getElementById("introBar"),i=document.getElementById("introLbl");return t&&(t.style.width=n+"%"),i&&e&&(i.textContent=Tt(e)),new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)))};document.getElementById("introHotel").textContent=Pn(gt.hotel)+" \xB7 "+Pn(gt.city);document.getElementById("introRoom").textContent=Pn(gt.room);document.getElementById("introMeta").textContent=gt.area+" \u33A1 \xB7 "+(typeof gt.bed=="object"?gt.bed[document.documentElement.lang]||gt.bed.ko:gt.bed);await ci(4,"load.tex");var Mc=document.getElementById("c"),ot=new vl({canvas:Mc,antialias:!1,powerPreference:"high-performance"}),Fp=(()=>{try{let n=ot.getContext(),e=n.getExtension("WEBGL_debug_renderer_info");return(e?n.getParameter(e.UNMASKED_RENDERER_WEBGL):n.getParameter(n.RENDERER))||""}catch{return""}})(),fn=(()=>{if(window.__forceHigh)return{low:!1,mid:!1};let e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform)||(navigator.hardwareConcurrency||8)<=4||Math.min(screen.width,screen.height)<500||/Mali|Adreno|PowerVR|SwiftShader|llvmpipe|Microsoft Basic/i.test(Fp),t=!e&&(/Intel|Radeon\(TM\) Graphics|Radeon Vega/i.test(Fp)||(navigator.deviceMemory||8)<8);return{low:e,mid:t}})(),In=fn.low?1:Math.min(devicePixelRatio,fn.mid?1.25:1.5);ot.setPixelRatio(In);ot.setSize(innerWidth,innerHeight);ot.toneMapping=ea;ot.toneMappingExposure=1;ot.shadowMap.enabled=!0;ot.shadowMap.type=Cu;var at=new Gr;at.background=new Ye(1381137);var am=new kr(ot),vd=am.fromScene(new ql,.04).texture;at.environment=vd;at.environmentIntensity=.35;var Ge=new pn(54,innerWidth/innerHeight,.05,900),Rt=new Xl(Ge,Mc);Rt.enableDamping=!0;Rt.dampingFactor=.055;Rt.minDistance=.3;Rt.maxDistance=34;Rt.maxPolarAngle=Math.PI*.94;Rt.rotateSpeed=.35;Rt.zoomSpeed=.6;var Lt=2.95,en=2.72,Te=.16,oi=-9,Gt=10,En=-3,rt=3,Re={};function tn(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function xn(n,e=[1,1],t=!0){let i=new Wr(n);return i.wrapS=i.wrapT=Kn,i.repeat.set(e[0],e[1]),t&&(i.colorSpace=hn),i.anisotropy=ot.capabilities.getMaxAnisotropy(),i}var Bp=11,Q=()=>(Bp=Bp*16807%2147483647)/2147483647;function Ma(n,e=2){let t=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,t,i).data,[r,o]=tn(t,i),a=o.createImageData(t,i),l=(c,h)=>s[((h+i)%i*t+(c+t)%t)*4]/255;for(let c=0;c<i;c++)for(let h=0;h<t;h++){let u=(l(h+1,c)-l(h-1,c))*e,d=(l(h,c+1)-l(h,c-1))*e,f=-u,g=d,x=1,m=Math.hypot(f,g,x);f/=m,g/=m,x/=m;let p=(c*t+h)*4;a.data[p]=(f*.5+.5)*255,a.data[p+1]=(g*.5+.5)*255,a.data[p+2]=(x*.5+.5)*255,a.data[p+3]=255}return o.putImageData(a,0,0),xn(r,[1,1],!1)}(function(){let e=64/Math.SQRT2,[t,i]=tn(1024,1024),[s,r]=tn(1024,1024),[o,a]=tn(1024,1024);i.fillStyle="#2a1a10",i.fillRect(0,0,1024,1024),r.fillStyle="#000",r.fillRect(0,0,1024,1024),a.fillStyle="#777",a.fillRect(0,0,1024,1024);for(let c of[i,r,a])c.save(),c.translate(0,0),c.rotate(-Math.PI/4);let l=[];for(let c=-10;c<=10;c++)for(let h=-48;h<=48;h++){let u=h+4*c,d=h-4*c;l.push([u*e,d*e,4*e,e,!0]),l.push([u*e,(d+1)*e,e,4*e,!1])}for(let[c,h,u,d,f]of l){let g=c+u/2,x=h+d/2,m=g*Math.SQRT1_2+x*Math.SQRT1_2,p=-g*Math.SQRT1_2+x*Math.SQRT1_2,b=(m%1024+1024)%1024,_=(p%1024+1024)%1024,y=Math.sin(Math.floor(b/7)*12.9898+Math.floor(_/7)*78.233+(f?3:0))*43758.5453,I=y-Math.floor(y),T=86+I*40|0,R=54+I*26|0,P=33+I*16|0;i.fillStyle=`rgb(${T},${R},${P})`,i.fillRect(c+1,h+1,u-2,d-2),i.globalAlpha=.16,i.strokeStyle=`rgb(${T*.55|0},${R*.5|0},${P*.45|0})`,i.lineWidth=1;for(let S=0;S<9;S++){if(i.beginPath(),f){let M=h+2+(S*7.3+I*13)%(d-4);i.moveTo(c,M),i.bezierCurveTo(c+u*.3,M+Math.sin(S+I*9)*2,c+u*.7,M-Math.sin(S*2+I)*2,c+u,M+Math.cos(S)*1.5)}else{let M=c+2+(S*7.3+I*13)%(u-4);i.moveTo(M,h),i.bezierCurveTo(M+Math.sin(S+I*9)*2,h+d*.3,M-Math.sin(S*2+I)*2,h+d*.7,M+Math.cos(S)*1.5,h+d)}i.stroke()}i.globalAlpha=1,i.fillStyle="rgba(255,230,200,.06)",i.fillRect(c+1,h+1,u-2,1.5),r.fillStyle="#fff",r.fillRect(c+1.5,h+1.5,u-3,d-3),a.fillStyle=`rgb(${100+I*50|0},${100+I*50|0},${100+I*50|0})`,a.fillRect(c+1,h+1,u-2,d-2)}for(let c of[i,r,a])c.restore();Re.floor=xn(t),Re.floorN=Ma(s,1.4),Re.floorR=xn(o,[1,1],!1)})();function lm(n=256,e=4,t=.2){let[i,s]=tn(n,n),r=s.createImageData(n,n);for(let o=0;o<n;o++)for(let a=0;a<n;a++){let l=Math.sin(a/e*Math.PI)*.5+.5,c=Math.sin(o/e*Math.PI)*.5+.5,u=200+((Math.floor(a/e)+Math.floor(o/e))%2?l:c)*40+(Q()-.5)*30*t*3,d=(o*n+a)*4;r.data[d]=r.data[d+1]=r.data[d+2]=Math.max(0,Math.min(255,u)),r.data[d+3]=255}return s.putImageData(r,0,0),i}var cm=lm();Re.fabric=xn(cm,[4,4]);Re.fabricN=Ma(cm,1.2);Re.fabricN.repeat.set(4,4);(function(){let[e,t]=tn(256,256);t.fillStyle="#808080",t.fillRect(0,0,256,256);for(let i=0;i<2600;i++)t.fillStyle=`rgba(${Q()<.5?0:255},${Q()<.5?0:255},${Q()<.5?0:255},.06)`,t.beginPath(),t.arc(Q()*256,Q()*256,1+Q()*3,0,7),t.fill();Re.leatherN=Ma(e,1.5),Re.leatherN.repeat.set(3,3)})();(function(){let[e,t]=tn(512,512);t.fillStyle="#e9e3d9",t.fillRect(0,0,512,512);for(let i=0;i<512;i+=1){let s=(Q()-.5)*26;t.fillStyle=`rgba(${s>0?255:60},${s>0?250:50},${s>0?240:40},${Math.abs(s)/260})`,t.fillRect(0,i,512,1+(Q()<.2?1:0))}for(let i=0;i<400;i++)t.fillStyle=`rgba(120,105,85,${Q()*.08})`,t.fillRect(Q()*512,Q()*512,20+Q()*120,1);t.fillStyle="rgba(0,0,0,.06)",t.fillRect(0,0,1.5,512),Re.grass=xn(e),Re.grassN=Ma(e,2.2)})();function bc(n="#efeae2",e="rgba(90,85,80,",t=1024){let[i,s]=tn(t,t);s.fillStyle=n,s.fillRect(0,0,t,t);for(let r=0;r<70;r++)s.fillStyle=`rgba(200,192,182,${Q()*.12})`,s.beginPath(),s.arc(Q()*t,Q()*t,40+Q()*200,0,7),s.fill();s.filter="blur(1px)";for(let r=0;r<22;r++){s.strokeStyle=e+(.12+Q()*.38)+")",s.lineWidth=.5+Q()*2.4,s.beginPath();let o=Q()*t,a=0;s.moveTo(o,a);for(let l=0;l<16;l++)o+=(Q()-.42)*100,a+=t/16,s.lineTo(o,a);s.stroke()}return s.filter="none",xn(i)}function yd(n,e,t,i="rgba(160,150,140,.55)"){let s=bc(n,e),r=s.image,o=r.getContext("2d");o.strokeStyle=i,o.lineWidth=3;let a=r.width;for(let l=0;l<=t;l++){let c=l*a/t;o.beginPath(),o.moveTo(c,0),o.lineTo(c,a),o.stroke(),o.beginPath(),o.moveTo(0,c),o.lineTo(a,c),o.stroke()}return s.needsUpdate=!0,s}Re.slab=yd("#ece6dd","rgba(140,128,115,",1,"rgba(150,140,128,.5)");Re.tile=yd("#e3ddd3","rgba(120,110,100,",2);Re.tileDark=yd("#6d6a66","rgba(220,215,208,",4,"rgba(40,38,36,.6)");Re.marble=bc();Re.marbleGreen=bc("#5a6a65","rgba(225,232,228,");Re.marbleWarm=bc("#e8dccb","rgba(150,120,90,");function zp(n,[e,t,i],s=1024){let[r,o]=tn(s,s);o.fillStyle=n,o.fillRect(0,0,s,s),o.filter="blur(6px)";for(let a=0;a<700;a++)o.fillStyle=`rgba(${e},${t},${i},${Q()*.07})`,o.beginPath(),o.ellipse(Q()*s,Q()*s,30+Q()*140,8+Q()*40,Q()*3,0,7),o.fill();o.filter="none";for(let a=0;a<9e3;a++)o.fillStyle=`rgba(255,255,255,${Q()*.06})`,o.fillRect(Q()*s,Q()*s,2,1);return o.strokeStyle="rgba(0,0,0,.14)",o.lineWidth=10,o.strokeRect(5,5,s-10,s-10),r}{let n=zp("#a7a29c",[60,58,62]);Re.rugLiving=xn(n),Re.rugLivingN=Ma(lm(512,2,.6),.8),Re.rugLivingN.repeat.set(8,8),Re.rugDining=xn(zp("#8d8a8a",[40,40,52]))}(function(){let[e,t]=tn(1024,1024);t.fillStyle="#ddd7d5",t.fillRect(0,0,1024,1024),t.strokeStyle="#5d4a5a",t.lineWidth=11,t.lineJoin="miter";let i=128;for(let s=-1;s<10;s++)for(let r=-1;r<9;r++){let o=r*i+(s%2?i/2:0),a=s*i*.8;t.beginPath(),t.moveTo(o,a),t.lineTo(o+i*.35,a),t.lineTo(o+i*.5,a+i*.25),t.lineTo(o+i*.85,a+i*.25),t.lineTo(o+i,a),t.moveTo(o+i*.5,a+i*.25),t.lineTo(o+i*.5,a+i*.55),t.lineTo(o+i*.2,a+i*.55),t.stroke()}for(let s=0;s<9e3;s++)t.fillStyle=`rgba(255,255,255,${Q()*.07})`,t.fillRect(Q()*1024,Q()*1024,2,1);Re.rugBed=xn(e,[1.4,1.4])})();function hm(n){let[t,i]=tn(256,256);i.fillStyle=n[0],i.fillRect(0,0,256,256);for(let s=0;s<260;s++)i.fillStyle=n[1+s%(n.length-1)],i.globalAlpha=.5+Q()*.5,i.beginPath(),i.ellipse(Q()*256,Q()*256,4+Q()*18,2+Q()*8,Q()*3,0,7),i.fill();return i.globalAlpha=1,xn(t,[1,1])}Re.patPillow=hm(["#d8d2c8","#5a6b8a","#8a6c4a","#c9b48a","#3e4a62"]);Re.paisley=hm(["#e4ddd0","#b9a37a","#8d8a96"]);function T_(n){let[e,t]=tn(512,384);if(n==="garden"){let i=t.createLinearGradient(0,0,0,384);i.addColorStop(0,"#2f4a3a"),i.addColorStop(1,"#5d6d4e"),t.fillStyle=i,t.fillRect(0,0,512,384);for(let s=0;s<700;s++)t.fillStyle=`hsla(${70+Q()*70},30%,${22+Q()*45}%,.5)`,t.beginPath(),t.arc(Q()*512,Q()*270,3+Q()*16,0,7),t.fill();t.fillStyle="#e8e4dc",t.beginPath(),t.ellipse(260,300,150,40,0,0,7),t.fill(),t.fillStyle="#3a3a3a";for(let s=0;s<4;s++)t.fillRect(200+s*35,250,6,40)}else if(n==="ink"){t.fillStyle="#f3f0ea",t.fillRect(0,0,512,384);for(let i=0;i<260;i++)t.fillStyle=`rgba(25,45,95,${.5+Q()*.5})`,t.save(),t.translate(30+Q()*452,30+Q()*324),t.rotate(Q()*.6-.3),t.fillRect(0,0,14+Q()*26,5+Q()*4),t.restore()}else{t.fillStyle="#cdb78a",t.fillRect(0,0,512,384);for(let i=0;i<4e3;i++)t.fillStyle=`rgba(255,240,200,${Q()*.18})`,t.fillRect(Q()*512,Q()*384,1+Q()*3,1+Q()*3)}return xn(e)}(function(){let[n,e]=tn(128,128),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(.6,"rgba(0,0,0,.2)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Re.blob=new Wr(n)})();await ci(14,"load.tex");var es=1.6,ac=.5,lc=[];function _d(n){for(;lc.length;)if(lc.shift().userData.paint(),!n)return lc.length>0;return!1}function ed(n,e,t,i,s,r,o,a){let l=ac-n*Math.tan(e),c=ac+n*Math.tan(e),h=es+n*Math.tan(t),u=es+n*Math.tan(i),d=Math.round(s*(u-h)/(c-l)),f=new Ht({transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}),g=()=>{let[p,b]=tn(s,d),_=S=>(ac+n*Math.tan(S)-l)/(c-l)*s,y=S=>(u-(es+n*Math.tan(S)))/(u-h)*d,I=S=>(S-l)/(c-l)*s,T=S=>(u-S)/(u-h)*d,R=s/(c-l);r(b,{X:_,Y:y,XW:I,YW:T,PPM:R,W:s,H:d,D:n,night:o}),window.__bakeViews&&((window.__viewC=window.__viewC||{})[a]=p);let P=xn(p);P.wrapS=P.wrapT=Ci,P.anisotropy=4,P.generateMipmaps=!0,f.map=P,f.visible=!0,f.needsUpdate=!0},x=()=>{if(window.__bakeViews){g();return}new Zr().load("view/"+a+".webp",p=>{p.colorSpace=hn,p.wrapS=p.wrapT=Ci,p.anisotropy=4,f.map=p,f.visible=!0,f.needsUpdate=!0;try{$e=Math.max($e,2),or=!0}catch{}},void 0,()=>g())};f.visible=!1;let m=new oe(new kt(c-l,u-h),f);return m.position.set((l+c)/2,(h+u)/2,-n),m.userData.noShadow=!0,m.userData.view=!0,o?(m.userData.paint=x,lc.push(m)):x(),m}var dt=n=>n*Math.PI/180,td=dt(9.5);function A_(n,{X:e,Y:t,W:i,H:s,night:r}){let o=n.createLinearGradient(0,0,0,t(0));if(r?(o.addColorStop(0,"#04060d"),o.addColorStop(.55,"#0c1430"),o.addColorStop(1,"#2d2946")):(o.addColorStop(0,"#6f9cc9"),o.addColorStop(.6,"#aac5de"),o.addColorStop(1,"#e2e6e5")),n.fillStyle=o,n.fillRect(0,0,i,s),r)for(let a=0;a<500;a++)n.fillStyle=`rgba(255,255,255,${Q()*.7})`,n.fillRect(Q()*i,Q()*t(dt(6)),1.5,1.5);else for(let a=0;a<60;a++){let l=Q()*i,c=t(dt(8+Q()*26)),h=60+Q()*220,u=14+Q()*36,d=.18+Q()*.3;n.save(),n.translate(l,c),n.scale(1,u/h);let f=n.createRadialGradient(0,0,0,0,0,h);f.addColorStop(0,`rgba(255,255,255,${d})`),f.addColorStop(.55,`rgba(255,255,255,${d*.6})`),f.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=f,n.beginPath(),n.arc(0,0,h,0,7),n.fill(),n.restore()}for(let[a,l,c]of r?[["#121729",1,0],["#0d1120",.7,2]]:[["#9eabb8",1,0],["#8695a3",.75,2]]){n.fillStyle=a,n.beginPath(),n.moveTo(0,s);for(let h=-70;h<=70;h+=.25){let u=dt(h),d=l*(1.6+Math.abs(Math.sin(u*3.1+c))*2.2+Math.sin(u*11+c)*.45+Math.sin(u*29)*.18+(h<-12?1.4*Math.exp(-Math.pow((h+32)/10,2))*2:0));n.lineTo(e(u),t(dt(d)))}n.lineTo(i,s),n.fill(),r||(n.fillStyle="rgba(235,238,240,.18)",n.fillRect(0,t(dt(1.5)),i,s))}if(n.fillStyle=r?"#1a1d2e":"#b9c2ca",n.fillRect(0,t(dt(.4)),i,s),r){for(let l=0;l<5e3;l++)n.fillStyle=`rgba(255,${190+Q()*50|0},${120+Q()*80|0},${Q()*.8})`,n.fillRect(Q()*i,t(dt(.4))+Q()*(s-t(dt(.4))),1.5,1.5);let a=n.createLinearGradient(0,t(dt(4)),0,t(dt(0)));a.addColorStop(0,"rgba(255,170,110,0)"),a.addColorStop(1,"rgba(255,170,110,.18)"),n.fillStyle=a,n.fillRect(0,t(dt(4)),i,t(0)-t(dt(4)))}}function um(n,{XW:e,YW:t,PPM:i,W:s,H:r,night:o},a){let{topMin:l,topMax:c,col:h,minW:u=8,maxW:d=30,skipX:f=null,lit:g=.35,seedOff:x=0}=a,m=-10;for(;m<s/i*1+10;){let p=m,b=u+Q()*(d-u),_=e(0),y=m*i,I=(m+b)*i,T=l+Q()*(c-l);f&&I>f[0]&&y<f[1]&&(T=Math.min(T,f[2]));let R=t(T),P=(Q()-.5)*.18;n.fillStyle=h,n.fillRect(y,R,I-y,r-R),n.fillStyle=P>0?`rgba(255,255,255,${P})`:`rgba(0,0,0,${-P})`,n.fillRect(y,R,I-y,r-R),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(I-(I-y)*.18,R,(I-y)*.18,r-R),Q()<.5&&(n.fillStyle=h,n.fillRect(y+(I-y)*.2,R-i*1.6,(I-y)*.3,i*1.6));let S=3.3*i,M=Math.max(1.5,.9*i),D=Math.max(2,1.1*i),z=Q()<.3;for(let B=R+S*.6;B<r;B+=S){if(z&&!o){n.fillStyle=`rgba(${140+Q()*30|0},${175+Q()*20|0},${200+Q()*20|0},.35)`,n.fillRect(y+2,B,(I-y)*.82-2,S*.7);continue}for(let k=y+D*.6;k<I-(I-y)*.18-M;k+=M+D)if(o){if(Q()<g){let K=Q();n.fillStyle=K<.72?`rgba(255,${196+Q()*44|0},${120+Q()*70|0},${.55+Q()*.45})`:`rgba(205,225,255,${.45+Q()*.4})`,n.fillRect(k,B,M,S*.55)}}else{let K=Q()<.6?55:225;n.fillStyle=`rgba(${K},${K+8},${K+16},${.12+Q()*.14})`,n.fillRect(k,B,M,S*.55)}}if(!o){let B=n.createLinearGradient(0,R,0,r);B.addColorStop(0,"rgba(255,255,255,0)"),B.addColorStop(1,"rgba(225,230,235,.12)"),n.fillStyle=B,n.fillRect(y,R,I-y,r-R)}m+=b+Q()*3}}function R_(n,e){let{X:t,Y:i,XW:s,YW:r,PPM:o,W:a,H:l,night:c,D:h}=e,u=t(td);n.fillStyle=c?"#0a110f":"#4c6a48",n.beginPath(),n.moveTo(u-a*.25,l);for(let x=-14;x<=14;x+=.2){let m=2.2*Math.exp(-Math.pow(x/6.5,2))-.6+Math.sin(x*2.3)*.06;n.lineTo(t(td+dt(x)),i(dt(m)))}if(n.lineTo(u+a*.25,l),n.fill(),!c)for(let x=0;x<900;x++){let m=(Q()-.5)*24,p=2.2*Math.exp(-Math.pow(m/6.5,2))-.6-Q()*2.5;n.fillStyle=`rgba(${35+Q()*45|0},${62+Q()*45|0},${35+Q()*25|0},.55)`,n.beginPath(),n.arc(t(td+dt(m)),i(dt(p)),2+Q()*5,0,7),n.fill()}let d=i(dt(1.55)),f=o*h*Math.tan(dt(.105)),g=x=>d-x*f;if(n.fillStyle=c?"#d8d0c2":"#eeede8",n.beginPath(),n.moveTo(u-3.2*f,d),n.lineTo(u-1.9*f,g(18)),n.lineTo(u+1.9*f,g(18)),n.lineTo(u+3.2*f,d),n.fill(),n.fillRect(u-6*f,g(23),12*f,5*f),n.fillRect(u-4.5*f,g(26),9*f,3*f),n.fillRect(u-3*f,g(28),6*f,2*f),n.fillStyle=c?"#b8ada0":"#d9d7d0",n.fillRect(u-.9*f,g(40),1.8*f,12*f),n.fillRect(u-.4*f,g(46),.8*f,6*f),n.fillStyle=c?"#555":"#cfcfcf",n.fillRect(u+9*f,g(14),1.1*f,15*f),c){n.fillStyle="rgba(255,214,150,.95)",n.fillRect(u-6*f,g(21.5),12*f,1.3*f),n.fillStyle="rgba(255,140,120,.95)",n.fillRect(u-.5*f,g(46),1*f,1*f);let x=n.createRadialGradient(u,g(22),0,u,g(22),26*f);x.addColorStop(0,"rgba(255,205,160,.38)"),x.addColorStop(1,"rgba(255,205,160,0)"),n.fillStyle=x,n.fillRect(u-26*f,g(22)-26*f,52*f,52*f);for(let m=0;m<60;m++)n.fillStyle=`rgba(255,220,170,${Q()*.8})`,n.fillRect(u-a*.12+Q()*a*.24,i(dt(1.5-Q()*2)),1.5,1.5)}um(n,e,{topMin:es-h*Math.tan(dt(2.6)),topMax:es+h*Math.tan(dt(.7)),col:c?"#171c2c":"#8f9aa6",minW:14,maxW:40,skipX:[u-a*.14,u+a*.14,es-h*Math.tan(dt(2.2))],lit:.32})}function C_(n,e){let{YW:t,PPM:i,W:s,H:r,night:o,D:a}=e;if(um(n,e,{topMin:es-a*Math.tan(dt(13)),topMax:es-a*Math.tan(dt(4)),col:o?"#1d2335":"#6f7a86",minW:7,maxW:18,lit:.4}),o)for(let l=0;l<3;l++){let c=t(es-a*Math.tan(dt(16+l*7)));for(let h=0;h<s;h+=6)n.fillStyle=(h/6+l)%2?"rgba(255,90,60,.8)":"rgba(255,240,200,.85)",Q()<.45&&n.fillRect(h,c,4,2)}}var lr={day:[],night:[]};for(let n of[!1,!0])[ed(420,dt(62),dt(-6),dt(42),2048,A_,n,(n?"n":"d")+"f"),ed(160,dt(62),dt(-14),dt(10),3072,R_,n,(n?"n":"d")+"m"),ed(70,dt(62),dt(-40),dt(-2),3072,C_,n,(n?"n":"d")+"n")].forEach((t,i)=>{t.renderOrder=-10+i,n&&(t.material.opacity=0,t.position.z+=.1),i===0&&!n&&(t.material.transparent=!1),at.add(t),lr[n?"night":"day"].push(t);let s=new oe(t.geometry,t.material);s.position.set(2*ac-t.position.x+3,t.position.y,-t.position.z),s.rotation.y=Math.PI,s.renderOrder=t.renderOrder,s.userData=t.userData,at.add(s),lr[n?"night":"day"].push(s)});await ci(22,"load.tex");var Fn=(n,e=.88,t=Re.fabric)=>new ue({color:n,roughness:e,map:t,normalMap:Re.fabricN,normalScale:new Y(.5,.5)}),v={wall:new ue({color:15854820,roughness:.9,map:Re.grass,normalMap:Re.grassN,normalScale:new Y(.25,.25)}),wallWarm:new ue({color:15129805,roughness:.9,map:Re.grass,normalMap:Re.grassN,normalScale:new Y(.35,.35)}),trim:new ue({color:16052458,roughness:.45}),ceil:new ue({color:16118509,roughness:.95}),floor:new ue({map:Re.floor,normalMap:Re.floorN,normalScale:new Y(.6,.6),roughnessMap:Re.floorR,roughness:.55,envMapIntensity:1.2}),brass:new ue({color:13674594,metalness:1,roughness:.24}),brassD:new ue({color:9401416,metalness:1,roughness:.36}),chrome:new ue({color:14540253,metalness:1,roughness:.12}),walnut:new ue({color:4992540,roughness:.42}),ebony:new ue({color:2760988,roughness:.35}),black:new ue({color:1315860,roughness:.28,metalness:.25}),cream:Fn(15656406),ivory:Fn(16184302,.85),greyV:Fn(7106430,.62),mustard:Fn(13144094,.7),taupe:Fn(9074272),navy:Fn(2762552,.8),linen:Fn(16513784,.95),sand:Fn(15128760),lilac:Fn(8223370),pat:new ue({map:Re.patPillow,roughness:.85,normalMap:Re.fabricN,normalScale:new Y(.5,.5)}),paisley:new ue({map:Re.paisley,roughness:.8,normalMap:Re.fabricN}),leatherC:new ue({color:15457990,roughness:.48,normalMap:Re.leatherN,normalScale:new Y(.4,.4)}),leatherB:new ue({color:7357741,roughness:.4,normalMap:Re.leatherN,normalScale:new Y(.6,.6)}),tan:Fn(10517080,.85),marble:new ue({map:Re.marble,roughness:.14}),marbleG:new ue({map:Re.marbleGreen,roughness:.16}),marbleW:new ue({map:Re.marbleWarm,roughness:.16}),mirror:new ue({color:13817562,metalness:1,roughness:.04}),curtain:new ue({color:13156544,roughness:.95,side:Qt}),sheer:new ue({color:16777215,roughness:1,transparent:!0,opacity:.36,side:Qt,depthWrite:!1}),frameW:new ue({color:2828842,roughness:.45,metalness:.5}),glass:new ue({color:16777215,roughness:.02,metalness:0,transparent:!0,opacity:.08,depthWrite:!1}),crystal:new ue({color:16777215,roughness:.02,metalness:.1,transparent:!0,opacity:.45,emissive:16774112,emissiveIntensity:.1}),amber:new ue({color:12936475,roughness:.1,transparent:!0,opacity:.88,emissive:8006662,emissiveIntensity:0}),vase:new ue({color:4868678,roughness:.5}),ceramic:new ue({color:15986922,roughness:.25}),leaf:new ue({color:4679226,roughness:.6,side:Qt}),petal:new ue({color:16513267,roughness:.55,side:Qt}),petalP:new ue({color:8149664,roughness:.6,side:Qt}),petalR:new ue({color:13781038,roughness:.6,side:Qt}),cove:new Ht({color:16773596}),led:new Ht({color:16769720}),screen:new ue({color:329224,roughness:.06,metalness:.6})};v.mirror.userData.room="bed";Object.assign(v,{bath:new ue({map:Re.slab,roughness:.2}),tileFloor:new ue({map:Re.tile,roughness:.22}),showerFloor:new ue({map:Re.tileDark,roughness:.35}),mirrorBath:new ue({color:13817562,metalness:1,roughness:.04}),showerGlass:new ue({color:15397874,roughness:.02,transparent:!0,opacity:.16,depthWrite:!1,side:Qt}),frost:new ue({color:16053490,roughness:.6,transparent:!0,opacity:.72,side:Qt}),water:new ue({color:11126988,roughness:.02,metalness:.15,transparent:!0,opacity:.55}),nightLed:new Ht({color:0}),towel:Fn(16513782,1),robe:Fn(16250352,1),panelGlass:new ue({color:723724,roughness:.08,metalness:.4})});v.bath.userData.tile=2.4;v.tileFloor.userData.tile=1.2;v.showerFloor.userData.tile=.6;var ba=[],Sa=(n,e,t=.06,i=1.6)=>{let s=new ue({color:n,roughness:.9,emissive:e,emissiveIntensity:t,side:Qt});return s.userData.d=t,s.userData.n=i,ba.push(s),s};ba.push(Object.assign(v.amber,{userData:{d:0,n:.9}}),Object.assign(v.crystal,{userData:{d:.1,n:1.2}}));var Be=new Wt;at.add(Be);function ii(n,e,t,i,s=0,r=0,o=0,a=Be,l=1){let c=new Un(n,e,t),h=c.attributes.uv,u=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]];for(let f=0;f<6;f++)for(let g=0;g<4;g++){let x=f*4+g;h.setXY(x,h.getX(x)*u[f][0]/l,h.getY(x)*u[f][1]/l)}let d=new oe(c,i);return d.position.set(s,r,o),a.add(d),d}function U(n,e,t,i,s=0,r=0,o=0,a=Be){let l=new oe(new Un(n,e,t),i);return l.position.set(s,r,o),a.add(l),l}function It(n,e,t,i,s,r=0,o=0,a=0,l=Be,c){c===void 0&&(c=i<.015?1:i<.05?2:3),i=Math.min(i,n/2-.001,e/2-.001,t/2-.001);let h=new oe(new ws(n,e,t,c,i),s);return h.position.set(r,o,a),l.add(h),h}function Vt(n,e,t,i,s,r,o,a,l=Be,c=.035){i=Math.min(i,n/2-.001,e/2-.001,t/2-.001);let h=new ws(n,e,t,Math.max(n,e,t)>.6?4:3,i),u=h.attributes.position;for(let f=0;f<u.count;f++){let g=u.getX(f)/(n/2),x=u.getY(f)/(e/2),m=u.getZ(f)/(t/2),p=(1-g*g)*(1-m*m);x>0&&u.setY(f,u.getY(f)+c*p*x);let b=1+.04*(1-x*x);u.setX(f,u.getX(f)*(1+.02*(1-x*x))),u.setZ(f,u.getZ(f)*b)}h.computeVertexNormals();let d=new oe(h,s);return d.position.set(r,o,a),l.add(d),d}var nd={};function P_(n,e,t){let i=n+"_"+e+"_"+t;if(nd[i])return nd[i];let s=new Un(n,e,t,12,12,3),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o)/(n/2),l=r.getY(o)/(e/2),c=r.getZ(o)/(t/2),h=Math.pow(Math.max(0,(1-a*a)*(1-l*l)),.6);r.setZ(o,Math.sign(c||1)*(t/2)*(.12+.88*h)*Math.abs(c));let u=1-.06*(1-Math.abs(a))*Math.abs(l)*Math.abs(l);r.setX(o,r.getX(o)*(1-.05*(1-l*l)*Math.abs(a))),r.setY(o,r.getY(o)*u)}return s.computeVertexNormals(),nd[i]=s}function nr(n,e,t,i,s,r,o,a=-.25,l=0,c=0,h=.17){let u=new oe(P_(n,e,h),t);return u.position.set(s,r,o),u.rotation.set(a,l,c),i.add(u),u}function Ae(n,e,t,i,s=0,r=0,o=0,a=Be,l=28){let c=new oe(new Li(n,e,t,l),i);return c.position.set(s,r,o),a.add(c),c}function vn(n,e,t,i,s,r=Be,o=20,a=14){let l=new oe(new Ko(n,o,a),e);return l.position.set(t,i,s),r.add(l),l}function ve(n=0,e=0,t=0,i=0,s=Be){let r=new Wt;return r.position.set(n,e,t),r.rotation.y=i,s.add(r),r}var Hp={};function I_(n){let e=Math.round(n*.8*20)/20;return Hp[e]||(Hp[e]=new Ht({map:Re.blob,transparent:!0,opacity:e,depthWrite:!1}))}function Kt(n,e,t,i,s=1,r=Be){let o=new oe(new kt(t,i),I_(s));return o.userData.blob=!0,o.rotation.x=-Math.PI/2,o.position.set(n,.013,e),o.userData.noShadow=!0,o.renderOrder=1,r.add(o),o}function Qe(n,e,t,i,s,r=Be,o=28){let a=new oe(new Tl(n.map(([l,c])=>new Y(l,c)),o),e);return a.position.set(t,i,s),r.add(a),a}var D_=new Ko(.007,6,4);function Md(n,e){let t=new Xs(D_,v.brass,n.length),i=new zt;return n.forEach((s,r)=>{i.position.copy(s),i.updateMatrix(),t.setMatrixAt(r,i.matrix)}),t.userData.noShadow=!0,e.add(t),t}await ci(32,"load.arch");var We=new Wt;Be.add(We);var Ot=new Wt;Be.add(Ot);var si=[],dm=[];function hi(n,e,t,i,s=[],r=v.wall,o){let a=[],l=t;s=[...s].sort((c,h)=>c[0]-h[0]);for(let[c,h,u,d]of s)c>l&&a.push([l,c,0,Lt]),u>0&&a.push([c,h,0,u]),d<Lt&&a.push([c,h,d,Lt]),l=h;l<i&&a.push([l,i,0,Lt]);for(let[c,h,u,d]of a){let f=h-c,g=(c+h)/2,x=d-u,m=(u+d)/2;dm.push(new Jn().setFromCenterAndSize(new A(n==="x"?g:e,m,n==="x"?e:g),new A(n==="x"?f:Te,x,n==="x"?Te:f)));let p=r.userData.tile||1,b=n==="x"?ii(f,x,Te,r,g,m,e,We,p):ii(Te,x,f,r,e,m,g,We,p);if(o==="south"&&si.push(b),u===0&&x>1)for(let _ of[-1,1]){let y=I=>{o==="south"&&si.push(I)};n==="x"?(y(U(f,.14,.018,v.trim,g,.07,e+_*(Te/2+.009),We)),y(U(f,.02,.028,v.trim,g,.145,e+_*(Te/2+.014),We))):(y(U(.018,.14,f,v.trim,e+_*(Te/2+.009),.07,g,We)),y(U(.028,.02,f,v.trim,e+_*(Te/2+.014),.145,g,We)))}}}function kp(n,e,t,i,s,r=!1){let o=Math.round(t/.11),a=new kt(t,i,o*6,8),l=a.attributes.position;for(let u=0;u<l.count;u++){let d=l.getX(u),f=(l.getY(u)+i/2)/i,g=(r?.03:.05)*(1+(1-f)*.25);l.setZ(u,Math.sin(d/t*Math.PI*2*o)*g+Math.sin(d*3+f*2)*.01),l.setX(u,d*(1+(1-f)*.05))}a.computeVertexNormals();let c=new Wt;c.position.set(n,0,e),We.add(c);let h=new oe(a,s);return h.position.set(0,i/2+.02,0),r&&(h.userData.noShadow=!0),c.add(h),r||U(t*1.04,.03,.09,s,0,.06,0,c),c}var bd=[],Sd=[];function fm(n,e,t,i=.55,s=2.5,r=1,o=!0){let a=e-n,l=(n+e)/2,c=(i+s)/2;ii(a,.02,Te,v.trim,l,s+.01,t,We),ii(.02,s-i,Te,v.trim,n-.01,c,t,We),ii(.02,s-i,Te,v.trim,e+.01,c,t,We),i>.6&&ii(a,.02,Te,v.trim,l,i-.01,t,We);for(let[u,d,f,g]of[[a,.06,l,s-.03],[a,.07,l,i+.035],[.06,s-i,n+.03,c],[.06,s-i,e-.03,c]])U(u,d,.07,v.frameW,f,g,t-r*.03,We);a>2.2&&U(.05,s-i,.06,v.frameW,l,c,t-r*.03,We),U(a+.3,.04,.3,v.marbleW,l,i-.02,t+r*.1,We),i<.7&&U(a+.2,.08,.02,v.trim,l,i-.08,t+r*.22,We);let h=U(a,s-i,.008,v.glass,l,c,t-r*.04,We);if(h.userData.noShadow=!0,o){U(a+1.2,.035,.07,v.brassD,l,en-.02,t+r*.26,We);for(let u of[-1,1]){let d=l+u*(a/2+.18),f=kp(d,t+r*.26,.5,en-.06,v.curtain);bd.push({g:f,a:d,b:l+u*(a/4+.06),sc:(a/2+.22)/.5})}for(let u of[-1,1])kp(l+u*(a/2-.16),t+r*.16,.38,en-.06,v.sheer,!0)}else{U(a+.12,.08,.1,v.trim,l,s+.1,t+r*.12,We);let u=new Wt;u.position.set(l,s+.06,t+r*.12),We.add(u);let d=U(a+.06,1,.025,v.linen,0,-.5,0,u);Sd.push({g:u,full:s-i+.06}),u.scale.y=.08}}var pm=[];function ca(n,e,t,i,s=.55,r=16769720,o=[]){let a=e-n,l=i-t,c=(n+e)/2,h=(t+i)/2,u=Lt-en,d=128,f=Math.max(32,Math.round(128*l/a)),[g,x]=tn(d,f),m=x.createImageData(d,f);for(let T=0;T<f;T++)for(let R=0;R<d;R++){let P=(R+.5)/d*a,S=(T+.5)/f*l,M=Math.min(P-s,a-s-P,S-s,l-s-S),D=M<0?0:Math.round(255*(.18+.82*Math.exp(-M/.45))),z=(T*d+R)*4;m.data[z]=m.data[z+1]=m.data[z+2]=D,m.data[z+3]=255}x.putImageData(m,0,0);let p=new Wr(g);p.colorSpace=hn;let b=new ue({color:16118509,roughness:.95,emissive:r,emissiveMap:p,emissiveIntensity:0});pm.push(b);let _=new oe(new kt(a,l),b);_.rotation.x=Math.PI/2,_.position.set(c,Lt,h),Ot.add(_),U(a,u,s,v.ceil,c,en+u/2,t+s/2,Ot),U(a,u,s,v.ceil,c,en+u/2,i-s/2,Ot),U(s,u,l-2*s,v.ceil,n+s/2,en+u/2,h,Ot),U(s,u,l-2*s,v.ceil,e-s/2,en+u/2,h,Ot);for(let[T,R]of[[.03,.06],[.07,.025]])U(a,R,T*2,v.trim,c,en-R/2,t+T,Ot),U(a,R,T*2,v.trim,c,en-R/2,i-T,Ot),U(T*2,R,l,v.trim,n+T,en-R/2,h,Ot),U(T*2,R,l,v.trim,e-T,en-R/2,h,Ot);let y=a-2*s,I=l-2*s;for(let[T,R,P,S]of[[y,.035,c,t+s],[y,.035,c,i-s],[.035,I,n+s,h],[.035,I,e-s,h]])U(T,.05,R,v.trim,P,en+.025,S,Ot);for(let[T,R,P,S]of[[y,.012,c,t+s+.02],[y,.012,c,i-s-.02],[.012,I,n+s+.02,h],[.012,I,e-s-.02,h]]){let M=U(T,.025,R,v.cove,P,en+.065,S,Ot);M.userData.noShadow=!0}for(let[T,R]of o){let P=Ae(.045,.045,.01,v.chrome,T,en-.003,R,Ot,20),S=Ae(.032,.032,.012,v.led,T,en-.006,R,Ot,20);S.userData.noShadow=!0}return U(y*.7,.004,.03,v.black,c,en-.001,t+s*.5,Ot),{x:c,z:h,w:y,d:I}}function Bi(n,e,t,i,s,r,o=1,a=v.trim){let c=e+o*(Te/2+.011);n==="x"?(U(s,.022,.022,a,t,i+r/2,c,We),U(s,.022,.022,a,t,i-r/2,c,We),U(.022,r,.022,a,t-s/2,i,c,We),U(.022,r,.022,a,t+s/2,i,c,We)):(U(.022,.022,s,a,c,i+r/2,t,We),U(.022,.022,s,a,c,i-r/2,t,We),U(.022,r,.022,a,c,i,t-s/2,We),U(.022,r,.022,a,c,i,t+s/2,We))}function Ea(n,e,t,i){let s=e+i*(Te/2+.006),r=n==="x"?U(.08,.12,.01,v.trim,t,1.15,s,We):U(.01,.12,.08,v.trim,s,1.15,t,We)}var Sc=[],go=new oe(new kt(Gt-oi,rt-En),v.floor);go.rotation.x=-Math.PI/2;go.position.set((oi+Gt)/2,0,0);go.receiveShadow=!0;go.userData.noCast=!0;Be.add(go);Sc.push(go);function wa(n,e,t,i,s,r=0){let o=new kt(e-n,i-t),a=o.attributes.uv,l=s.userData.tile||1;for(let h=0;h<a.count;h++)a.setXY(h,a.getX(h)*(e-n)/l,a.getY(h)*(i-t)/l);let c=new oe(o,s);return c.rotation.x=-Math.PI/2,c.position.set((n+e)/2,r,(t+i)/2),c.receiveShadow=!0,c.userData.noCast=!0,Be.add(c),Sc.push(c),c}var ur=-4.4,Cs=-.6,Ti=6,rs=4,Xn=7.2;wa(ur,Cs,rt,Ti,v.tileFloor);wa(rs,Gt,rt,Xn,v.tileFloor);wa(-3.7,-2.5,rt-Te/2,rt+Te/2,v.tileFloor,.002);wa(6.6,7.7,rt-Te/2,rt+Te/2,v.tileFloor,.002);for(let e of[Re.floor,Re.floorN,Re.floorR])e.repeat.set((Gt-oi)/2,(rt-En)/2);var Ta={dining:[-7.4,-5.4],liv1:[-3.3,-1.3],liv2:[.3,2.7],bed:[5.4,8]};hi("x",En-Te/2,oi-Te,Gt+Te,Object.values(Ta).map(([n,e])=>[n,e,.55,2.5]));hi("x",rt+Te/2,oi-Te,Gt+Te,[[-3.7,-2.5,0,2.4],[6.6,7.7,0,2.3]],v.wall,"south");hi("z",ur-Te/2,rt+Te,Ti,[],v.wall,"south");hi("z",Cs+Te/2,rt+Te,Ti,[],v.wall,"south");hi("x",Ti+Te/2,ur-Te,Cs+Te,[[-2.6,-1.6,0,2.3]],v.wall,"south");hi("z",rs,rt+Te/2,Xn,[],v.bath,"south");hi("z",Gt+Te/2,rt+Te/2,Xn,[],v.bath,"south");hi("x",Xn+Te/2,rs-Te/2,Gt+Te,[[6,8.2,.9,2.5]],v.bath,"south");for(let[n,e,t,i]of[[rs+Te/2,6.6,0,Lt],[7.7,Gt,0,Lt],[6.6,7.7,2.3,Lt]]){let s=ii(e-n,i-t,.02,v.bath,(n+e)/2,(t+i)/2,rt+Te/2+.01,We,2.4);si.push(s)}hi("z",oi-Te/2,En,rt);hi("z",Gt+Te/2,En,rt,[],v.wallWarm);hi("z",-4,En,rt,[[-2.3,2.3,0,2.5]]);hi("z",4,En,rt,[[-2.7,-1.5,0,2.3]]);function mm(n,e,t,i,s){for(let o of[-1,1]){for(let a of[t-.09/2,i+.09/2])n==="z"&&U(.02,s+.09,.09,v.trim,e+o*(Te/2+.01),(s+.09)/2,a,We);n==="z"&&U(.02,.09,i-t+2*.09,v.trim,e+o*(Te/2+.01),s+.09/2,(t+i)/2,We)}if(n==="z"){U(Te,.01,i-t,v.trim,e,s,(t+i)/2,We);for(let o of[t,i])U(Te,s,.01,v.trim,e,s/2,o,We)}}mm("z",4,-2.7,-1.5,2.3);mm("z",-4,-2.3,2.3,2.5);function Ed(n,e,t,i){let r=[];for(let o of[-1,1]){for(let a of[e-.09/2,t+.09/2])r.push(U(.09,i+.09,.02,v.trim,a,(i+.09)/2,n+o*(Te/2+.01),We));r.push(U(t-e+2*.09,.09,.02,v.trim,(e+t)/2,i+.09/2,n+o*(Te/2+.01),We))}r.push(U(t-e,.01,Te,v.trim,(e+t)/2,i,n,We));for(let o of[e,t])r.push(U(.01,i,Te,v.trim,o,i/2,n,We));si.push(...r)}Ed(rt+Te/2,-3.7,-2.5,2.4);Ed(rt+Te/2,6.6,7.7,2.3);Ed(Ti+Te/2,-2.6,-1.6,2.3);var uc={},ln={k:0,tk:0},cr=ve(-2.1-.495,0,Ti+Te/2,0,We),Ji=ve(.495,0,0,0,cr);{U(.99,2.29,.05,v.walnut,0,1.145,0,Ji);for(let[e,t]of[[.6,.85],[1.62,.95]])for(let i of[-1,1]){let s=ve(0,e,i*.027,0,Ji);U(.7,.018,.01,v.brassD,0,t/2,0,s),U(.7,.018,.01,v.brassD,0,-t/2,0,s),U(.018,t,.01,v.brassD,-.35,0,0,s),U(.018,t,.01,v.brassD,.35,0,0,s)}let n=U(.14,.018,.02,v.brass,.32,1.02,-.06,Ji);Ae(.028,.028,.02,v.brass,.39,1.02,-.035,Ji).rotation.x=Math.PI/2,Ae(.009,.009,.02,v.brass,0,1.52,-.035,Ji).rotation.x=Math.PI/2,U(.36,.04,.04,v.chrome,.22,2.2,-.05,Ji);{let e=U(.14,.018,.02,v.brass,.32,1.02,.06,Ji)}uc.mat=new ue({color:2228224,emissive:16722456,emissiveIntensity:1.4}),U(.03,.075,.012,v.black,.33,1.17,.045,Ji),U(.012,.012,.004,uc.mat,.33,1.19,.052,Ji),cr.traverse(e=>{e.isMesh&&(e.userData.noShadowCast=!0,e.userData.noBake=!0)})}var Zt=new Wt;Zt.visible=!1;Be.add(Zt);{let n=(h,u=0,d=.85)=>new ue({color:h,roughness:d,emissive:h,emissiveIntensity:u}),e=Ti+Te,t=e+3.4,i=-6.2,s=2.2,r=2.75,o=(()=>{let[h,u]=tn(512,512);u.fillStyle="#4a3a30",u.fillRect(0,0,512,512),u.strokeStyle="rgba(196,160,104,.55)",u.lineWidth=5;for(let d=-512;d<1024;d+=64)u.beginPath(),u.moveTo(d,0),u.lineTo(d+256,512),u.stroke(),u.beginPath(),u.moveTo(d+256,0),u.lineTo(d,512),u.stroke();return xn(h,[5,2])})(),a=new oe(new kt(s-i,t-e),new ue({map:o,roughness:1,emissive:2760728,emissiveIntensity:.35}));a.rotation.x=-Math.PI/2,a.position.set((i+s)/2,.001,(e+t)/2),Zt.add(a);let l=n(14273976,.32),c=n(5915700,.15,.5);U(s-i,r,.05,l,(i+s)/2,r/2,t,Zt),U(.05,r,t-e,l,i,r/2,(e+t)/2,Zt),U(.05,r,t-e,l,s,r/2,(e+t)/2,Zt),U(s-i,.04,t-e,n(15722716,.55),(i+s)/2,r,(e+t)/2,Zt);for(let[h,u]of[[i,-2.64],[-1.56,s]])U(u-h,r,.04,l,(h+u)/2,r/2,e+.01,Zt);U(1.08,r-2.36,.04,l,-2.1,(r+2.36)/2,e+.01,Zt);for(let h of[e+.04,t-.04])U(s-i,.12,.02,c,(i+s)/2,.06,h,Zt);for(let h=i+1;h<s;h+=1.6){let u=new oe(new Xr(.07,24),new Ht({color:16773592}));u.rotation.x=Math.PI/2,u.position.set(h,r-.025,(e+t)/2),Zt.add(u);let d=new oe(new Xr(.9,32),new Ht({color:16767392,transparent:!0,opacity:.1,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(h,.004,(e+t)/2),Zt.add(d)}for(let h of[-3.4,-.8]){let u=U(.12,.32,.06,new Ht({color:16770751}),h,1.75,e+.05,Zt)}{let[h,u]=tn(512,160);u.fillStyle="#b8955a",u.fillRect(0,0,512,160),u.fillStyle="#2b2118",u.textAlign="center",u.font='600 40px times-new-roman, "Times New Roman", serif',u.fillText("PRESIDENTIAL SUITE",256,72),u.font='26px "Pretendard Variable", sans-serif',u.fillText("EXECUTIVE TOWER",256,118);let d=new oe(new kt(.42,.13),new ue({map:xn(h),metalness:.6,roughness:.35,emissive:3811860,emissiveIntensity:.4}));d.position.set(-1.25,1.52,e+.03),Zt.add(d)}Zt.traverse(h=>{h.isMesh&&(h.userData.noBake=!0,h.userData.noAO=!0,h.castShadow=!1)})}var so=new Wt;Be.add(so);{let n=new ue({color:4867650,roughness:.6,metalness:.05,emissive:1709844,emissiveIntensity:1}),e=En-Te-.1,t=-1.6,i=4.6,s=[oi-.4,...Object.values(Ta).flat().sort((r,o)=>r-o),Gt+.4];for(let r=0;r<s.length-1;r+=2){let o=s[r],a=s[r+1];U(a-o,i-t,.1,n,(o+a)/2,(t+i)/2,e,so)}for(let r=1;r<s.length-1;r+=2){let o=s[r],a=s[r+1];U(a-o,.55-t,.1,n,(o+a)/2,(t+.55)/2,e,so),U(a-o,i-2.5,.1,n,(o+a)/2,(2.5+i)/2,e,so)}for(let r of[-.35,3.05])U(Gt-oi+1,.16,.3,new ue({color:2762790,roughness:.5}),(oi+Gt)/2,r,e-.12,so);so.traverse(r=>{r.isMesh&&(r.userData.noBake=!0,r.userData.noShadow=!0,r.userData.noShadowCast=!0)})}var is=[];{let n=ve(7.15,0,rt+Te/2+.05,0,We);U(1.12,2.26,.03,v.frost,0,1.14,0,n);for(let e of[.02,2.26])U(1.14,.03,.035,v.brassD,0,e,0,n);for(let e of[-.56,.56])U(.03,2.26,.035,v.brassD,e,1.14,0,n);U(.02,.4,.03,v.brass,.48,1.05,-.03,n),is.push({g:n,slide:!0,a:7.15,b:6.05,c:[7.15,rt+Te/2],south:!0,k:0,tk:0})}var ya=ve(4.06,0,-1.52,Math.PI/2,We);is.push({g:ya,a:Math.PI/2,b:.1,c:[4,-2.1],k:0,tk:0});U(1.17,2.27,.045,v.trim,.585,1.135,0,ya);for(let[n,e]of[[.62,.9],[1.67,.95]])for(let t of[-1,1]){let i=new Wt;i.position.set(.585,n,t*.026),ya.add(i),U(.86,.016,.012,v.trim,0,e/2,0,i),U(.86,.016,.012,v.trim,0,-e/2,0,i),U(.016,e,.012,v.trim,-.43,0,0,i),U(.016,e,.012,v.trim,.43,0,0,i)}{let n=Ae(.012,.012,.13,v.brass,1.06,1,.05,ya);n.rotation.z=Math.PI/2,vn(.025,v.brass,1,1,.05,ya)}{let n=ve(-3.68,0,rt+Te/2+.03,0,We);U(1.16,2.36,.045,v.trim,.58,1.18,0,n);for(let[e,t]of[[.64,.92],[1.72,.98]])for(let i of[-1,1]){let s=new Wt;s.position.set(.58,e,i*.026),n.add(s),U(.86,.016,.012,v.trim,0,t/2,0,s),U(.86,.016,.012,v.trim,0,-t/2,0,s),U(.016,t,.012,v.trim,-.43,0,0,s),U(.016,t,.012,v.trim,.43,0,0,s)}for(let e of[-1,1]){let t=Ae(.012,.012,.13,v.brass,1.06,1,e*.05,n);t.rotation.z=Math.PI/2,vn(.025,v.brass,1,1,e*.05,n)}is.push({g:n,a:0,b:-1.48,c:[-3.1,rt],south:!0,k:0,tk:0})}is.forEach(n=>n.g.traverse(e=>{e.isMesh&&(e.userData.noShadowCast=!0,e.userData.noBake=!0)}));Object.values(Ta).forEach(([n,e])=>fm(n,e,En));Ea("z",4,-2.95,-1);Ea("z",4,-1.25,1);Ea("z",-4,2.6,1);Ea("x",rt+Te/2,-3.95,1);Ea("x",rt+Te/2,7.95,1);[[-2.3,-1.3],[-1.3,-.2],[-.2,1],[1,2.2],[2.2,3.4]].forEach(([n,e])=>{Bi("x",rt,(n+e)/2,1.66,e-n-.2,1.5,-1),Bi("x",rt,(n+e)/2,.6,e-n-.2,.46,-1)});[[-8.6,-7.6],[-5,-4.4]].forEach(([n,e])=>Bi("x",En,(n+e)/2,1.5,e-n-.1,1.7,1));[[-8.6,-7.2],[-7.2,-5.8],[-5.8,-4.4]].forEach(([n,e])=>Bi("x",rt,(n+e)/2,1.5,e-n-.2,1.9,-1));[[-2.8,-2.4],[2.4,2.8]].forEach(([n,e])=>Bi("z",-4,(n+e)/2,1.4,.25,2,1));Bi("z",4,2.25,1.5,1.2,1.9,1);Bi("z",4,2.25,1.5,1.2,1.9,-1);[[4.4,5.3],[8.2,9.6]].forEach(([n,e])=>Bi("x",En,(n+e)/2,1.5,e-n-.15,1.8,1));var Nb=[ca(-4,4,En,rt,.55,16769720,[[-3.72,-1.5],[-3.72,1.5],[3.72,-1.5],[3.72,1.5],[-2,2.72],[2,2.72],[0,2.72]]),ca(oi,-4,En,rt,.5,16769720,[[-8.75,-1.6],[-8.75,0],[-8.75,1.6],[-6.5,2.75],[-5,2.75]]),ca(4,Gt,En,rt,.5,16773340,[[9.75,-1.95],[9.75,1.95],[5.2,2.75],[7,2.75]]),ca(ur,Cs,rt,Ti,.42,16769720,[[-4.19,3.6],[-4.19,5.4],[-.81,3.6],[-.81,5.4]]),ca(rs,Gt,rt,Xn,.45,16774374,[[4.3,4.4],[4.3,5.75],[9.78,3.75],[9.78,6.4],[7.1,6.98]])],yn=[];function gm(n,e,t,i,s,r,o=[],a={}){let l=ve(i,0,s,r);for(let f of[-1,1])for(let g of[-1,1])Ae(.022,.015,.1,v.ebony,f*(n/2-.08),.05,g*(e/2-.08),l);It(n,.22,e,.035,t,0,.21,0,l);let c=Ae(.008,.008,n-.05,t,0,.32,-e/2+.005,l,8);c.rotation.z=Math.PI/2;let h=n>2.2?3:2,u=(n-.36)/h;for(let f=0;f<h;f++){let g=-n/2+.18+u*(f+.5);Vt(u-.012,.17,e-.27,.05,t,g,.405,-.085,l,.03);let x=Vt(u-.012,.44,.2,.06,t,g,.64,e/2-.24,l,.02);x.rotation.x=-.14}let d=It(n-.02,.5,.14,.05,t,0,.58,e/2-.07,l);d.rotation.x=-.04;for(let f of[-1,1])Vt(.19,.34,e,.07,t,f*(n/2-.095),.5,0,l,.02);return o.forEach((f,g)=>{let x=(g+.5)/o.length,m=g===0||g===o.length-1;nr(m?.48:.42,m?.48:.4,f,l,-n/2+.3+x*(n-.6),.7+(m?.02:0),e/2-.36+(m?0:.06),-.3,(x-.5)*.35,(x-.5)*.1)}),Kt(i,s,n+.4,e+.4,.9),l}function Aa(n,e,t,i,s=v.ebony,r,o=!1){let a=ve(e,0,t,i);for(let h of[-1,1])for(let u of[-1,1]){let d=Ae(.02,.012,.17,s,h*.3,.085,u*.3,a);d.rotation.z=h*.1,d.rotation.x=-u*.08}It(.74,.2,.72,.04,n,0,.27,0,a),Vt(.58,.13,.54,.05,n,0,.43,-.05,a,.03);let l=Vt(.74,.58,.15,.06,n,0,.65,.3,a,.01);l.rotation.x=-.14;for(let h of[-1,1])Vt(.11,.32,.7,.045,n,h*.33,.5,0,a,.015),U(.012,.33,.72,s,h*.391,.5,0,a);let c=U(.76,.012,.17,s,0,.94,.34,a);if(c.rotation.x=-.14,r&&nr(.4,.3,r,a,0,.64,.16,-.22),o){let h=[];for(let u=0;u<=30;u++){let d=u/30;h.push(new A(-.395,.36+d*.3,-.34+d*0),new A(.395,.36+d*.3,-.34))}Md(h,a)}return Kt(e,t,1.1,1.1,.8),a}function xm(n,e,t,i){let s=Sa(i,16765082,.08,1.8),r=new oe(new Li(n,e,t,40,1,!0),s),o=new oe(new _i(n,.004,6,40),v.brass);o.rotation.x=Math.PI/2,o.position.y=t/2,r.add(o);let a=new oe(new _i(e,.004,6,40),v.brass);return a.rotation.x=Math.PI/2,a.position.y=-t/2,r.add(a),r}function wd(n,e,t=1.6,i=16117734){let s=ve(n,0,e);Qe([[0,0],[.16,0],[.16,.012],[.14,.028],[.02,.035],[0,.035]],v.brass,0,0,0,s),Ae(.011,.011,t,v.brass,0,t/2,0,s);for(let a of[.35,.7])Ae(.016,.016,.03,v.brass,0,t*a,0,s);let r=xm(.17,.25,.32,i);r.position.y=t+.06,s.add(r),vn(.03,v.led,0,t+.02,0,s).userData.noShadow=!0;let o=new dn(16763274,0,5,2);return o.position.set(n,t-.02,e),Be.add(o),yn.push(o),Kt(n,e,.5,.5,.7),s}function L_(n,e,t){let i=ve(n,0,e,t);Qe([[0,0],[.13,0],[.13,.015],[.02,.03],[0,.03]],v.brass,0,0,0,i),Ae(.009,.009,1.25,v.brass,0,.63,0,i);let s=Ae(.008,.008,.32,v.brass,.14,1.26,0,i);s.rotation.z=Math.PI/2;let r=new oe(new Li(.06,.06,.22,24,1,!1,0,Math.PI),v.brass);r.rotation.set(0,0,Math.PI/2),r.position.set(.3,1.22,0),i.add(r);let o=new dn(16763274,0,3,2),a=new A(.3,1.12,0).applyAxisAngle(new A(0,1,0),t).add(new A(n,0,e));o.position.copy(a),o.userData={d:.2,n:1.6},Be.add(o),yn.push(o),vn(.025,v.led,.3,1.17,0,i).userData.noShadow=!0,Kt(n,e,.4,.4,.6)}function vm(n,e,t,i="brass",s=16249578,r=1){let o=ve(n,e,t);i==="amber"?(vn(.13*r,v.amber,0,.15*r,0,o,32,24).scale.y=1.05,Ae(.05*r,.06*r,.03*r,v.brass,0,.015*r,0,o),Ae(.012*r,.012*r,.12*r,v.brass,0,.31*r,0,o)):Qe([[0,0],[.08,0],[.08,.02],[.03,.04],[.045,.12],[.025,.3],[.012,.36],[0,.36]].map(([c,h])=>[c*r,h*r]),v.brass,0,0,0,o);let a=xm(.13*r,.18*r,.22*r,s);a.position.y=.48*r,o.add(a);let l=new dn(16763274,0,4,2);return l.position.set(n,e+.44*r,t),Be.add(l),yn.push(l),o.userData.light=l,o.userData.shade=a.material,o}var Td=(()=>{let n=new yi;return n.moveTo(0,0),n.bezierCurveTo(.03,.01,.035,.05,0,.06),n.bezierCurveTo(-.035,.05,-.03,.01,0,0),new jo(n,6)})(),Ad=(()=>{let n=new yi;return n.moveTo(0,0),n.bezierCurveTo(.05,.05,.04,.22,0,.28),n.bezierCurveTo(-.04,.22,-.05,.05,0,0),new jo(n,8)})();function Ec(n,e,t,i=v.petal,s=1,r="brass"){let o=ve(n,e,t);o.scale.setScalar(s),r==="brass"?Qe([[0,0],[.055,0],[.06,.02],[.06,.15],[.055,.16],[0,.16]],v.brass,0,0,0,o):Qe([[0,0],[.05,0],[.08,.06],[.07,.13],[.045,.17],[.05,.19],[0,.19]],v.ceramic,0,0,0,o);for(let a=0;a<5;a++){let l=new oe(Ad,v.leaf);l.position.y=.15,l.rotation.set(-.6-Q()*.5,a*1.3,0),o.add(l)}for(let a=0;a<14;a++){let l=a*2.4,c=.08*Math.sqrt(a/14),h=new Wt;h.position.set(Math.cos(l)*c,.21+Q()*.07,Math.sin(l)*c),h.rotation.set(Q()*.6-.3,Q()*6,Q()*.6-.3),o.add(h);for(let u=0;u<5;u++){let d=new oe(Td,i);d.rotation.set(-Math.PI/2+.5,0,u/5*Math.PI*2),h.add(d)}vn(.008,v.brass,0,.005,0,h,6,4)}return o.traverse(a=>{a.isMesh&&(a.userData.noShadowCast=!0)}),o}function wc(n,e,t,i=1){let s=ve(n,e,t);s.scale.setScalar(i),Qe([[0,0],[.06,0],[.07,.1],[.065,.12],[0,.12]],v.ceramic,0,0,0,s);for(let r=0;r<4;r++){let o=new oe(Ad,v.leaf);o.scale.set(1.3,.8,1),o.position.y=.11,o.rotation.set(-1.1,r*1.6,0),s.add(o)}for(let[r,o]of[[.02,.3],[-.03,-.25]]){let a=new bs([new A(0,.11,0),new A(r,.35,0),new A(r+o*.3,.52,0),new A(r+o*.6,.56,0)]),l=new oe(new qr(a,20,.003,5),v.leaf);s.add(l);for(let c=0;c<6;c++){let h=a.getPoint(.45+c*.1),u=new Wt;u.position.copy(h),u.rotation.set(0,Q()*6,0),s.add(u);for(let d=0;d<5;d++){let f=new oe(Td,v.petal);f.scale.setScalar(.8),f.rotation.set(0,0,d/5*Math.PI*2),u.add(f)}}}return s}function Ra(n,e,t,i,s,r){let o=new ue({map:s,roughness:1,normalMap:r||Re.fabricN,normalScale:new Y(.4,.4)}),a=new oe(new ws(t,.014,i,2,.006),o);return a.position.set(n,.007,e),a.receiveShadow=!0,a.userData.noCast=!0,Be.add(a),a}function Rd(n,e,t,i,s,r,o,a){let l=ve(t,i,e+a*(Te/2+.03));a<0&&(l.rotation.y=Math.PI),U(s+.1,r+.1,.04,v.brassD,0,0,0,l),U(s+.02,r+.02,.042,v.ceramic,0,0,.002,l);let c=new oe(new kt(s-.08,r-.08),new ue({map:T_(o),roughness:.8}));return c.position.z=.022,l.add(c),l}function ha(n,e,t,i,s,r=Be,o=.18,a=.27,l=0){let c=ve(n,e,t,s,r),h=0,u=[2047324,2973310,3099195,6954526,1776411,13214247,14274488,4143696,2382451,10129274],d=new Un(1,1,1),f=[];for(;h<i-.03;){let p=.02+Q()*.035,b=o+Q()*(a-o),_=.15+Q()*.06;f.push([h+p/2,b,_,p,u[Q()*u.length|0]]),h+=p+.002,Q()<.06&&(h+=.06)}let g=new Xs(d,new ue({roughness:.75}),f.length),x=new zt,m=new Ye;return f.forEach(([p,b,_,y,I],T)=>{x.position.set(p-i/2,b/2,0),x.scale.set(y,b,_),x.rotation.set(0,0,0),x.updateMatrix(),g.setMatrixAt(T,x.matrix),g.setColorAt(T,m.setHex(I))}),c.add(g),c}function Ps(n,e,t,i,s=0,r=Be){let o=ve(n,e,t,s,r),a=0,l=[15327956,2829099,7232064,13218954,3951196];for(let c=0;c<i;c++){let h=.03+Q()*.025,u=.26-c*.02+Q()*.03,d=.2-c*.012,f=U(u,h,d,new ue({color:l[c%l.length],roughness:.7}),0,a+h/2,0,o);f.rotation.y=(Q()-.5)*.18,a+=h}return o}await ci(46,"load.furn");Ra(.2,.1,4.8,3.8,Re.rugLiving,Re.rugLivingN);gm(2.7,.98,v.cream,.2,1.95,0,[v.mustard,v.pat,v.lilac,v.pat,v.mustard]);Aa(v.greyV,-.55,-1.55,Math.PI,v.black,v.paisley);Aa(v.greyV,.95,-1.55,Math.PI,v.black,v.paisley);Aa(v.greyV,-1.75,.35,-Math.PI/2,v.black,v.paisley);(function(){let n=ve(.2,0,.35);It(1.4,.05,.85,.006,v.marble,0,.425,0,n),U(1.42,.022,.87,v.brass,0,.392,0,n);for(let t of[-1,1]){for(let i of[-1,1])U(.022,.38,.022,v.brass,t*.68,.2,i*.41,n);U(.02,.02,.82,v.brass,t*.68,.025,0,n),U(1.34,.02,.02,v.brass,0,.025,t*.41,n)}Ps(-.28,.45,.05,3,.15,n),Qe([[0,0],[.04,0],[.1,.05],[.11,.1],[.08,.17],[.05,.2],[0,.2]],v.vase,.15,.45,-.1,n),Qe([[0,0],[.05,0],[.09,.06],[.085,.12],[.04,.16],[0,.16]],new ue({color:3881526,roughness:.35}),.38,.45,.08,n);let e=new oe(new Rl(.035,.009,80,8,2,3),v.brass);e.position.set(-.3,.62,.02),n.add(e),Kt(.2,.35,1.7,1.1,.6)})();(function(){let n=ve(-1.7,0,-.75);Ae(.24,.24,.025,v.walnut,0,.56,0,n),Qe([[.16,0],[.16,.015],[.05,.04],[.04,.3],[.06,.52],[.12,.55],[0,.55]],v.ebony,0,0,0,n),Ec(-1.7,.575,-.75,v.petalP,.9),Kt(-1.7,-.75,.6,.6,.6)})();(function(){let n=ve(2.05,0,2.25);Ae(.22,.22,.02,v.marbleG,0,.6,0,n),Ae(.035,.035,.58,v.brass,0,.3,0,n),Ae(.15,.15,.015,v.brass,0,.008,0,n),vm(2.05,.61,2.25,"amber",16051680,1.1)})();wd(-1.25,-2.4,1.5);(function(){let n=ve(-.5,0,-2.72);U(1.3,.62,.38,v.ebony,0,.5,0,n),U(1.32,.02,.4,v.marble,0,.82,0,n);let[e,t]=tn(512,256);t.fillStyle="#1f1a17",t.fillRect(0,0,512,256),t.strokeStyle="#d8cdb8",t.lineWidth=5;for(let a=-32;a<280;a+=28)for(let l=0;l<512;l+=64)t.beginPath(),t.moveTo(l,a),t.lineTo(l+32,a+20),t.lineTo(l+64,a),t.stroke();let i=new oe(new kt(1.26,.58),new ue({map:xn(e),roughness:.4,metalness:.3}));i.position.set(0,.5,.192),n.add(i),U(.004,.58,.005,v.brass,0,.5,.195,n);for(let a of[-.6,.6])for(let l of[-.15,.15])Ae(.015,.01,.2,v.ebony,a,.1,l,n);wc(-.5+.35,.83,-2.72,1.1),Ps(-.5-.3,.83,-2.72,2,.2);let s=ve(-.5,1.75,-3+Te/2+.04),r=(a,l)=>{let c=new yi;return c.moveTo(-a/2,0),c.bezierCurveTo(-a/4,l*.7,a/4,l*.65,a/2,0),c.bezierCurveTo(a/4,-l*.35,-a/4,-l*.3,-a/2,0),new Ys(c,{depth:.012,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:2})};[[-.42,.02,.3,.42,.5,v.brass],[-.2,-.04,.28,.36,-.4,v.ceramic],[0,.06,.34,.5,.2,v.brass],[.22,-.05,.26,.32,-.7,v.ceramic],[.44,.04,.3,.46,1,v.brass]].forEach(([a,l,c,h,u,d],f)=>{let g=new oe(r(c,h),d);g.position.set(a,l,f*.01),g.rotation.z=u,s.add(g)});let o=new Ui(16770240,0,3,Math.PI/5,.7,2);o.position.set(-.5,2.6,-2.4),o.target.position.set(-.5,1.7,-3),o.userData={d:.5,n:2.5},Be.add(o,o.target),yn.push(o),Kt(-.5,-2.72,1.5,.6,.6)})();(function(){let n=ve(3.92,0,.7);ii(.06,2.3,2.7,v.walnut,0,1.3,0,n);for(let i of[-1.35,1.35])U(.07,2.3,.02,v.brassD,-.005,1.3,i,n);U(.36,.42,2.6,v.walnut,-.18,.23,0,n),U(.362,.006,2.602,v.brassD,-.18,.445,0,n);for(let i of[-.65,.65])U(.002,.36,.004,v.ebony,-.361,.23,i,n);U(.04,1.08,1.9,v.black,-.06,1.47,0,n);let e=new oe(new kt(1.86,1.04),v.screen);e.position.set(-.081,1.47,0),e.rotation.y=-Math.PI/2,n.add(e);let t=U(.01,.01,2.55,v.led,-.04,2.42,0,n);t.userData.noShadow=!0,Ps(-.18,.45,-.9,3,.3,n),Qe([[0,0],[.06,0],[.07,.15],[.03,.25],[0,.25]],v.ceramic,-.18,.45,.95,n),Kt(3.75,.7,.6,2.8,.6)})();(function(){let n=ve(.2,0,.35);Ae(.007,.007,.5,v.brass,0,Lt-.25,0,n),Ae(.06,.06,.02,v.brass,0,Lt-.01,0,n),Qe([[0,0],[.05,.02],[.07,.08],[.04,.16],[.025,.3],[.015,.34],[0,.34]],v.brass,0,2.18,0,n),vn(.06,v.crystal,0,2.15,0,n,16,12);let e=Sa(2038807,16761975,0,2.4);for(let i=0;i<8;i++){let s=i/8*Math.PI*2,r=i%2?.44:.34,o=i%2?2.3:2.42,a=new bs([new A(0,2.24,0),new A(Math.cos(s)*r*.5,2.12,Math.sin(s)*r*.5),new A(Math.cos(s)*r,o-.08,Math.sin(s)*r),new A(Math.cos(s)*r,o,Math.sin(s)*r)]);n.add(new oe(new qr(a,20,.008,6),v.brass)),Ae(.022,.018,.035,v.brass,Math.cos(s)*r,o+.01,Math.sin(s)*r,n,16);let l=new oe(new Li(.055,.085,.13,28,1,!0),e);l.position.set(Math.cos(s)*r,o+.1,Math.sin(s)*r),n.add(l);let c=vn(.018,v.led,Math.cos(s)*r,o+.06,Math.sin(s)*r,n,8,6);c.userData.noShadow=!0;let h=new oe(new Al(.016),v.crystal);h.scale.y=1.8,h.position.set(Math.cos(s)*r*.5,2.08,Math.sin(s)*r*.5),n.add(h)}let t=new dn(16763274,0,7,2);t.position.set(.2,2.25,.35),Be.add(t),yn.push(t)})();await ci(54,"load.furn");Ra(-6.5,.2,4.2,3,Re.rugDining,Re.rugLivingN);(function(){let n=oi+.02,e=-2.3,t=2.3,i=.25,s=2.55;U(.03,s-i,t-e,new ue({color:14472907,roughness:.85}),n+.01,(i+s)/2,0,We);let r=new ws(1,1,1,1,.12),o=[],a=.034,l=1.15,c=1.15;function h(f,g,x,m){o.push([f,g,x,g+a],[f,m-a,x,m],[f,g+a,f+a,m-a],[x-a,g+a,x,m-a])}for(let f=i+.04;f<s-.1;f+=c)for(let g=e+.02;g<t-.1;g+=l){let m=l/2;h(g+.06,f+.06,g+m+.06,f+m+.06),h(g+m-.06,f+m-.06,g+l-.06,f+c-.06),h(g+m-.2,f+.06+.08,g+m-.06,f+.06+.22),h(g+m+.06,f+c-.06-.22,g+m+.2,f+c-.06-.08),h(g+.06+.08,f+m+.2,g+.06+.22,f+m+.34),h(g+l-.06-.22,f+m-.34,g+l-.06-.08,f+m-.2)}let u=new Xs(r,v.trim,o.length),d=new zt;o.forEach(([f,g,x,m],p)=>{x=Math.min(x,t),m=Math.min(m,s),d.position.set(n+.055,(g+m)/2,(f+x)/2),d.scale.set(.06,Math.max(.001,m-g),Math.max(.001,x-f)),d.updateMatrix(),u.setMatrixAt(p,d.matrix)}),We.add(u);for(let f of[e-.03,t+.03])U(.05,s-i+.06,.02,v.brass,n+.03,(i+s)/2,f,We);U(.05,.02,t-e+.08,v.brass,n+.03,s+.03,0,We),U(.05,.02,t-e+.08,v.brass,n+.03,i-.03,0,We);for(let f of[-1.5,0,1.5]){let g=new Ui(16773596,0,5,Math.PI/7,.5,2);g.position.set(-8.75,en-.01,f),g.target.position.set(oi+.1,.6,f),Be.add(g,g.target),yn.push(g)}})();(function(){let n=ve(-6.5,0,.2),e=new yi,t=1.45,i=.65,s=.32;e.moveTo(-t+s,-i),e.lineTo(t-s,-i),e.lineTo(t,-i+s*.9),e.lineTo(t,i-s*.9),e.lineTo(t-s,i),e.lineTo(-t+s,i),e.lineTo(-t,i-s*.9),e.lineTo(-t,-i+s*.9),e.closePath();let r=new ue({color:4864560,roughness:.28,map:Re.fabric}),o=new oe(new Ys(e,{depth:.045,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:3}),r);o.rotation.x=-Math.PI/2,o.position.y=.715,n.add(o);for(let h of[-.75,.75])It(.5,.66,.6,.02,v.ebony,h,.36,0,n),U(.52,.015,.62,v.brassD,h,.02,0,n);let a=v.ceramic,l=new ue({color:16777215,roughness:.02,transparent:!0,opacity:.28}),c=[[-1,-.55,0],[0,-.55,0],[1,-.55,0],[-1,.55,Math.PI],[0,.55,Math.PI],[1,.55,Math.PI],[-1.25,0,Math.PI/2],[1.25,0,-Math.PI/2]];for(let[h,u,d]of c){let f=ve(h,.775,u,d,n);Qe([[0,0],[.13,0],[.14,.012],[.135,.014],[.1,.006],[0,.006]],a,0,0,.03,f),Qe([[0,0],[.09,0],[.1,.01],[.09,.012],[0,.006]],a,0,.012,.03,f),U(.012,.004,.2,v.chrome,-.17,.002,.03,f),U(.012,.004,.2,v.chrome,.17,.002,.03,f),U(.012,.004,.16,v.chrome,.2,.002,.03,f),Qe([[0,0],[.035,0],[.036,.004],[.004,.01],[.004,.09],[.03,.11],[.04,.17],[.038,.2],[.036,.2],[.038,.17],[.028,.115],[0,.1]],l,.12,0,-.13,f);let g=U(.12,.012,.12,v.linen,0,.03,.03,f);g.rotation.y=.785}Qe([[0,0],[.08,0],[.12,.03],[.2,.07],[.22,.09],[0,.07]],v.vase,0,.775,0,n);for(let h=0;h<5;h++)vn(.03,h%2?v.mustard:v.petalR,-.08+h*.04,.86,(h%2-.5)*.06,n,10,8);Kt(-6.5,.2,3.4,1.9,.9)})();function dc(n,e,t){let i=ve(n,0,e,t);for(let[a,l,c]of[[-.19,-.19,.06],[.19,-.19,.06],[-.17,.19,-.1],[.17,.19,-.1]]){let h=Ae(.02,.012,.45,v.ebony,a,.225,l,i);h.rotation.x=c,Ae(.013,.011,.05,v.brass,a,.025,l+(c>0?-.015:.02),i)}Vt(.5,.09,.48,.04,v.leatherC,0,.49,-.01,i,.02);let s=new oe(new _i(.2,.055,14,40,Math.PI),v.leatherC);s.position.set(0,.52,.17),s.scale.set(1,1.75,.7),s.rotation.x=-.12,i.add(s);let r=new oe(new _i(.2,.06,14,40,Math.PI),v.tan);r.position.set(0,.52,.2),r.scale.set(1.02,1.78,.55),r.rotation.x=-.12,i.add(r);let o=[];for(let a=0;a<=26;a++){let l=a/26*Math.PI;o.push(new A(Math.cos(l)*.262,.52+Math.sin(l)*.262*1.78-0,.235-Math.sin(l)*.065))}Md(o,i),Kt(n,e,.7,.7,.5)}[-1,0,1].forEach(n=>{dc(-6.5+n,.2-.88,0),dc(-6.5+n,.2+.88,Math.PI)});dc(-6.5-1.78,.2,Math.PI/2);dc(-6.5+1.78,.2,-Math.PI/2);(function(){let n=ve(-6.5,0,.2);for(let a of[-.6,.6])Ae(.005,.005,.68,v.brass,a,Lt-.34,0,n),Ae(.035,.035,.015,v.brass,a,Lt-.008,0,n);U(1.92,.035,.38,v.brass,0,2.3,0,n);let e=new Li(.007,.007,1,8),t=new ue({color:16777215,roughness:.08,emissive:16773853,emissiveIntensity:.25,transparent:!0,opacity:.85});t.userData={d:.25,n:1.4},ba.push(t);let i=[];for(let a=0;a<90;a++){let l=-.93+a*.020898876404494383;i.push([l,-.17],[l,.17])}for(let a=1;a<14;a++){let l=-.17+a*.34/14;i.push([-.93,l],[.93,l])}let s=new Xs(e,t,i.length),r=new zt;i.forEach(([a,l],c)=>{let h=.3+Math.sin(c*.7)*.02;r.position.set(a,2.285-h/2,l),r.scale.set(1,h,1),r.updateMatrix(),s.setMatrixAt(c,r.matrix)}),s.userData.noShadow=!0,n.add(s);let o=U(1.8,.02,.3,v.led,0,2.27,0,n);o.userData.noShadow=!0;for(let a of[-.6,0,.6]){let l=new dn(16773338,0,5,2);l.position.set(-6.5+a,2,.2),Be.add(l),yn.push(l)}})();(function(){let n=ve(-5.2,0,2.67,Math.PI),e=1.9,t=.5;U(e,.84,t,v.walnut,0,.46,0,n),U(e-.02,.04,t-.04,v.ebony,0,.02,0,n);let i=t/2+.004;U(.62,.62,.01,new ue({color:1711392,roughness:.05,metalness:.3,transparent:!0,opacity:.55}),-.55,.47,i,n);for(let l of[.16,.78])U(.64,.02,.02,v.chrome,-.55,l,i+.005,n);U(.02,.4,.025,v.chrome,-.27,.47,i+.02,n);let s=U(.58,.008,.4,v.led,-.55,.75,0,n);s.userData.noShadow=!0;let r=[2841908,13214247,9116957,15262936,3829413,2841908];for(let l=0;l<2;l++)for(let c=0;c<6;c++){let h=Qe([[0,0],[.028,0],[.028,.14],[.012,.19],[.01,.22],[0,.22]],new ue({color:r[(c+l)%6],roughness:.15,transparent:!0,opacity:.85}),-.78+c*.09,.2+l*.28,-.05+l*.03,n,16)}for(let l of[0,1])U(.9,.36,.01,v.walnut,.42,.27+l*.38,i,n),U(.24,.014,.02,v.brass,.42,.38+l*.38,i+.012,n);It(e+.04,.035,t+.04,.004,v.marble,0,.895,0,n),U(e,.62,.012,v.mirror,0,1.22,-t/2+.01,n);for(let l of[1.3,1.62]){U(e-.1,.012,.26,v.showerGlass,0,l,-t/2+.15,n);let c=U(e-.12,.006,.01,v.led,0,l-.012,-t/2+.27,n);c.userData.noShadow=!0}U(e,.66,.36,v.walnut,0,2.18,-t/2+.18,n);for(let l of[-.475,.475])U(.93,.62,.01,v.walnut,l,2.18,-t/2+.365,n),U(.012,.22,.02,v.brass,l+(l<0?.42:-.42),2,-t/2+.38,n);U(e+.04,.03,.4,v.walnut,0,2.525,-t/2+.18,n);let o=ve(.45,.913,-.02,0,n);It(.2,.3,.34,.03,v.black,0,.15,0,o),U(.16,.02,.14,v.chrome,0,.03,.12,o),U(.1,.06,.06,v.chrome,0,.22,.15,o),vn(.008,v.led,.06,.27,.171,o,6,4).userData.noShadow=!0;for(let l=0;l<4;l++){let c=ve(.72+l%2*.12,.913,-.1+(l>>1)*.15,0,n);Qe([[0,0],[.06,0],[.065,.008],[0,.008]],v.ceramic,0,0,0,c,20),Qe([[0,.008],[.032,.008],[.04,.07],[.037,.072],[.028,.015],[0,.015]],v.ceramic,0,0,0,c,20)}Qe([[0,0],[.07,0],[.08,.06],[.075,.17],[.04,.21],[0,.21]],v.chrome,-.05,.913,-.08,n),U(.02,.1,.02,v.black,.03,1.03,-.08,n),U(.26,.07,.16,v.walnut,-.42,.95,-.1,n),U(.25,.005,.15,v.brass,-.42,.987,-.1,n),U(.22,.03,.12,v.ebony,.2,.93,.12,n);for(let l=0;l<8;l++)vn(.012,new ue({color:[11570519,2894892,7020078,3103354][l%4],metalness:.8,roughness:.3}),.12+l%4*.05,.95,.1+(l>>2)*.04,n,8,6);Qe([[0,0],[.07,0],[.09,.18],[.095,.19],[0,.19]],v.brass,-.75,.913,.05,n);let a=new ue({color:16777215,roughness:.02,transparent:!0,opacity:.3});for(let l=0;l<8;l++)Qe([[0,0],[.03,0],[.032,.004],[.004,.008],[.004,.08],[.026,.1],[.034,.16],[.032,.18],[0,.1]],a,-.8+l*.2,1.31,-t/2+.15,n,16);for(let l=0;l<10;l++)Qe([[0,0],[.035,0],[.037,.1],[.033,.1],[.031,.006],[0,.006]],a,-.82+l*.18,1.63,-t/2+.15,n,16);Kt(-5.2,2.67,2.2,.8,.6)})();Rd("x",rt,-7.6,1.65,.9,.7,"garden",-1);await ci(61,"load.furn");Ra(7.2,.1,4.4,3.8,Re.rugBed);(function(){let n=Gt-.02,e=[-1.65,1.65],t=4,i=2,s=Fn(9271908,.72);s.map=Re.grass,s.normalMap=Re.grassN;let r=(e[1]-e[0])/t,o=2.72/i;for(let l=0;l<t;l++)for(let c=0;c<i;c++){let h=e[0]+r*(l+.5),u=o*(c+.5),d=It(.05,o-.012,r-.012,.008,s,n-.05,u,h,We);Bi("z",n-.05-Te/2+.016,h,u,r-.22,o-.22,-1,new ue({color:8022100,roughness:.65}))}for(let l of[-1,1]){for(let c=0;c<14;c++){let h=It(.03,.19,.46,.006,v.mirror,n-.045,.1+c*.195,l*1.95,We)}for(let c of[-.245,.245])U(.05,2.72,.012,v.brass,n-.05,1.36,l*1.95+c,We)}let a=new Ui(16769723,0,5,Math.PI/3.2,.8,2);a.position.set(9,en,0),a.target.position.set(Gt,1.2,0),Be.add(a,a.target),yn.push(a)})();(function(){let n=ve(8.55,0,0,Math.PI/2);It(2,.28,2.15,.05,v.leatherC,0,.2,0,n);for(let b of[-.9,.9])for(let _ of[-.95,.95])Ae(.02,.02,.06,v.brass,b,.03,_,n);Vt(1.92,.26,2.02,.08,v.linen,0,.47,-.02,n,.01);let e=1.96,t=1.72,i=.62,s=.07,r=.36,o=e/2+s*Math.PI/2+r,a=t+s*Math.PI/2+r,l=new kt(o*2,a,60,50),c=l.attributes.position,h=(b,_)=>{let y=Math.abs(b);if(y<=_-s)return[b,0];let I=y-(_-s);if(I<s*Math.PI/2){let T=I/s;return[Math.sign(b)*(_-s+s*Math.sin(T)),-(s-s*Math.cos(T))]}return[Math.sign(b)*_,-s-(I-s*Math.PI/2)]};for(let b=0;b<c.count;b++){let _=c.getX(b),y=c.getY(b)+a/2,[I,T]=h(_,e/2),R,P=0,S=y-(t-s);if(S<=0)R=y;else{let z=S;if(z<s*Math.PI/2){let B=z/s;R=t-s+s*Math.sin(B),P=-(s-s*Math.cos(B))}else R=t,P=-s-(z-s*Math.PI/2)}let M=i+Math.min(T,P)+(T<0&&P<0?Math.max(T,P)*.15:0),D=.008*Math.sin(_*9+y*3)+.006*Math.sin(y*14)+(M<i-.05?.012*Math.sin(_*30+y*20):0);c.setXYZ(b,I*(1+(M<i-.1?.015:0)),M+D,-(R-t/2)-.43)}l.computeVertexNormals();let u=new oe(l,new ue({color:16513783,roughness:.95,map:Re.fabric,normalMap:Re.fabricN,normalScale:new Y(.3,.3),side:Qt}));n.add(u),Vt(1.98,.05,.32,.02,v.linen,0,.64,.32,n,.01);let d=new yi,f=1.12,g=1.3;d.moveTo(-f,0),d.lineTo(-f,g-.25),d.quadraticCurveTo(-f-.06,g,-f+.25,g),d.lineTo(f-.25,g),d.quadraticCurveTo(f+.06,g,f,g-.25),d.lineTo(f,0),d.closePath();let x=new Ys(d,{depth:.12,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:6,curveSegments:24}),m=new oe(x,v.leatherC);m.position.set(0,.2,1.15),m.rotation.x=.06,n.add(m);for(let b of[-1,1]){let _=Vt(.2,1.1,.42,.08,v.leatherC,b*1.08,.72,.98,n,.01);_.rotation.y=b*.25}for(let b of[-.5,.5])nr(.78,.52,v.linen,n,b,.9,.98,-.32,0,0,.2),nr(.7,.48,v.linen,n,b*.95,.86,.8,-.28,0,0,.19);nr(.52,.42,v.navy,n,-.46,.84,.6,-.22,.1),nr(.52,.42,v.navy,n,.34,.82,.58,-.2,-.12),nr(.45,.32,Fn(10263200,.7),n,-.06,.8,.5,-.28,.05,0,.15);let p=Vt(1.98,.03,.45,.012,v.navy,0,.655,-.55,n,.004);Kt(8.55,0,2.6,2.6,.9)})();for(let n of[-1,1]){let e=ve(9.55,0,n*1.45);U(.5,.56,.5,v.ebony,0,.3,0,e),It(.5,.025,.5,.004,v.ivory,0,.59,0,e);for(let t of[0,1])It(.01,.22,.44,.003,v.ivory,-.252,.16+t*.25,0,e),U(.012,.012,.14,v.brass,-.262,.16+t*.25,0,e);{let t=vm(9.55,.6,n*1.45,"brass",16249578,1);t.userData.light.userData.bed=!0,t.userData.shade.userData.bed=!0}n>0?Ps(9.45,.6,n*1.45+.12,2,.4):Qe([[0,0],[.04,0],[.045,.08],[.02,.12],[0,.12]],v.amber,9.42,.6,n*1.45+.12)}(function(){let n=ve(7.15,0,0,Math.PI/2);for(let e of[-.42,.42]){Vt(.8,.2,.48,.06,v.leatherB,e,.43,0,n,.015);let t=[];for(let s=0;s<4;s++)for(let r=0;r<2;r++)t.push(new A(e-.3+s*.2,.545,-.12+r*.24));let i=Md(t,n);i.material=v.leatherB}for(let e of[-.8,.8])for(let t of[-.2,.2])Ae(.015,.012,.32,v.ebony,e,.16,t,n),Ae(.012,.011,.03,v.brass,e,.015,t,n);Kt(7.15,0,.8,1.9,.6)})();gm(1.7,.8,v.ivory,6.65,-2.35,Math.PI,[v.ivory,v.sand,v.ivory]);(function(){let n=ve(6.65,0,-1.45);Ae(.42,.42,.015,v.glass,0,.45,0,n);let e=new oe(new _i(.42,.008,8,60),v.ebony);e.rotation.x=Math.PI/2,e.position.y=.44,n.add(e);for(let t of[0,2.1,4.2]){let i=Ae(.01,.01,.43,v.ebony,Math.cos(t)*.3,.22,Math.sin(t)*.3,n)}Qe([[0,0],[.25,0],[.2,.06],[0,.06]],v.marble,0,0,0,n),Ec(6.65,.46,-1.45,v.petal,.9,"ceramic"),Ps(6.85,.46,-1.35,2,-.3)})();Aa(v.mustard,8.45,-2.1,Math.PI+.55,v.brass,v.ivory);wd(5.25,-2.55,1.55,16513008);wd(8.95,-2.6,1.35,16513008);(function(){let n=ve(4.36,0,-.25,Math.PI/2);It(1.7,.04,.62,.006,v.walnut,0,.75,0,n),U(1.2,.004,.42,v.leatherB,.15,.772,.02,n),U(.42,.7,.56,v.walnut,-.6,.38,0,n);for(let l of[0,1,2])U(.38,.2,.01,v.walnut,-.6,.17+l*.22,.282,n),U(.12,.012,.02,v.brass,-.6,.24+l*.22,.29,n);for(let l of[-.25,.25])U(.025,.73,.025,v.brass,.82,.37,l,n);U(.025,.025,.52,v.brass,.82,.03,0,n),U(.025,.025,.52,v.brass,.82,.72,0,n),U(1.5,.86,.04,v.black,0,1.65,-.18,n);let e=new oe(new kt(1.46,.82),v.screen);e.position.set(0,1.65,-.159),n.add(e),U(.22,.004,.07,v.brass,-.2,.773,-.24,n);for(let l of[-.27,-.2,-.13])U(.03,.002,.02,v.black,l,.776,-.24,n);Ae(.045,.045,.006,v.black,.55,.775,-.1,n);let t=ve(.62,.77,-.2,0,n);Ae(.07,.08,.02,v.brass,0,.01,0,t);let i=Ae(.008,.008,.42,v.brass,0,.22,0,t),s=Ae(.008,.008,.32,v.brass,-.12,.43,0,t);s.rotation.z=1;let r=new oe(new Xo(.07,.12,24,1,!0),Sa(13674594,16765082,0,1.2));r.material.metalness=.9,r.material.roughness=.3,r.position.set(-.26,.5,0),r.rotation.z=.6,t.add(r);{let l=new dn(16763274,0,2.5,2);l.position.set(4.36,.95,-.25+.26),l.userData={n:1.6},Be.add(l),yn.push(l)}let o=ve(-.25,.77,.05,.25,n);It(.2,.05,.16,.02,v.black,0,.025,0,o),It(.2,.035,.05,.015,v.black,0,.065,-.03,o),U(.08,.002,.06,v.panelGlass,0,.051,.05,o),U(.15,.008,.21,v.ceramic,.15,.776,.1,n);let a=Ae(.004,.004,.14,v.brass,.25,.782,.1,n);a.rotation.x=Math.PI/2,It(.24,.02,.32,.004,v.leatherB,-.05,.78,-.08,n).rotation.y=-.12,Kt(4.6,-.25,.8,1.9,.6)})();wc(4.26,.77,-.73,.8);(function(){let n=ve(4.95,0,-.2,Math.PI/2);for(let t=0;t<5;t++){let i=t/5*Math.PI*2,s=U(.3,.025,.04,v.chrome,Math.cos(i)*.15,.06,Math.sin(i)*.15,n);s.rotation.y=-i,vn(.025,v.black,Math.cos(i)*.3,.025,Math.sin(i)*.3,n,10,8)}Ae(.03,.03,.32,v.chrome,0,.24,0,n),Ae(.02,.02,.1,v.black,0,.42,0,n),Vt(.5,.09,.48,.04,v.leatherC,0,.48,0,n,.02);let e=Vt(.48,.5,.07,.035,v.leatherC,0,.82,.24,n,.01);e.rotation.x=-.12;for(let t of[-1,1]){let i=Ae(.012,.012,.36,v.chrome,t*.26,.62,.02,n);i.rotation.x=Math.PI/2,Ae(.01,.01,.12,v.chrome,t*.26,.56,-.12,n),Ae(.01,.01,.14,v.chrome,t*.26,.56,.18,n)}Kt(4.95,-.2,.75,.75,.5)})();Rd("x",rt,8.95,1.6,1,.72,"ink",-1);(function(){let t=rt-.02,i=.34,s=ve(0,0,0);U(5.95-4.15,2.5,.02,v.trim,(4.15+5.95)/2,1.25,t-.01,s);for(let l of[4.15,5.95,(4.15+5.95)/2+.4])U(.04,2.5,i,v.trim,l,1.25,t-i/2,s);U(5.95-4.15+.04,.06,i+.02,v.trim,(4.15+5.95)/2,2.53,t-i/2,s),U(5.95-4.15,.44,i,v.trim,(4.15+5.95)/2,.22,t-i/2,s);let r=(4.15+5.95)/2+.4;for(let l of[.9,1.42,1.94]){U(r-4.15-.04,.03,i,v.trim,(4.15+r)/2,l,t-i/2,s),U(5.95-r-.04,.03,i,v.trim,(r+5.95)/2,l,t-i/2,s);let c=U(5.95-4.15-.1,.006,.01,v.led,(4.15+5.95)/2,l-.02,t-i+.03,s);c.userData.noShadow=!0}ha((4.15+r)/2-.15,.44,t-.16,.7,0,s),ha((r+5.95)/2,.44,t-.16,.4,0,s,.16,.24),ha((4.15+r)/2,.915,t-.16,.6,0,s,.2,.29),wc((r+5.95)/2,.915,t-.17,.7),ha((4.15+r)/2+.2,1.435,t-.16,.35,0,s),Qe([[0,0],[.07,0],[.08,.12],[.03,.2],[0,.2]],v.ceramic,(4.15+r)/2-.3,1.435,t-.17,s),vn(.05,v.brass,(r+5.95)/2-.08,1.48,t-.17,s),Ps((r+5.95)/2+.05,1.435,t-.17,3,.1,s),ha((4.15+r)/2,1.955,t-.16,.55,0,s,.18,.26);{let l=ve((r+5.95)/2,1.955,t-.2,0,s);U(.16,.2,.02,v.brass,0,.1,0,l).rotation.x=-.12}let o=new Ui(16769461,0,2.5,Math.PI/4,.7,2);o.position.set((4.15+5.95)/2,2.45,t-.15),o.target.position.set((4.15+5.95)/2,.5,t-.15),o.userData={d:.3,n:2.2},Be.add(o,o.target),yn.push(o),Aa(v.ivory,5.35,2,Math.PI+.4,v.ebony,v.ivory,!0),L_(4.55,2.45,-.9);let a=ve(4.55,0,1.7);Ae(.2,.2,.02,v.walnut,0,.55,0,a),Qe([[.12,0],[.12,.015],[.03,.03],[.025,.53],[.08,.545],[0,.545]],v.walnut,0,0,0,a),Ec(4.55,.56,1.7,v.petalR,.7,"ceramic"),Kt(4.55,1.7,.5,.5,.6)})();await ci(68,"load.furn");(function(){let n=ur+Te/2-.08+.08,e=.6,t=3.3,i=5.55,s=2.55,r=n+e/2,o=(t+i)/2,a=ve(0,0,0);U(.02,s,i-t,v.walnut,n+.01,s/2,o,a),U(e,.04,i-t+.03,v.trim,r,s,o,a),U(e,.1,i-t,v.trim,r,.05,o,a);for(let p of[t,o,i])U(e,s,.03,v.trim,r,s/2,p,a);let l=t,c=o;U(e-.03,.025,c-l-.03,v.trim,r,2,(l+c)/2,a),U(e-.03,.025,c-l-.03,v.trim,r,.62,(l+c)/2,a);let h=Ae(.012,.012,c-l-.05,v.brass,r+.02,1.88,(l+c)/2,a);h.rotation.x=Math.PI/2;let u=U(.01,.006,c-l-.06,v.led,n+e-.06,1.985,(l+c)/2,a);u.userData.noShadow=!0;let d=new _i(.2,.008,6,24,Math.PI);for(let p=0;p<5;p++){let b=l+.12+p*.2,_=ve(r+.02,1.86,b,0,a),y=new oe(d,v.walnut);y.rotation.z=Math.PI,y.scale.y=.35,_.add(y);let I=new oe(new _i(.02,.003,4,12,Math.PI*1.4),v.chrome);if(I.position.y=.03,_.add(I),p===1||p===2){let T=Vt(.5,.95,.09,.04,v.robe,0,-.5,0,_,.01),R=U(.52,.04,.1,v.robe,0,-.55,0,_)}}let f=ve(r,.645,(l+c)/2+.18,Math.PI/2,a);It(.42,.3,.36,.01,new ue({color:3816253,roughness:.4,metalness:.5}),0,.15,0,f),U(.14,.08,.005,new Ht({color:8376752}),.08,.2,.181,f);for(let p=0;p<9;p++)U(.022,.016,.006,v.chrome,-.11+p%3*.03,.18-(p/3|0)*.025,.182,f);for(let p of[-1,1])Vt(.1,.04,.27,.04,v.towel,r+.1,.12,(l+c)/2-.25+p*.06,a,.01);for(let p of[o+(i-o)*.25,o+(i-o)*.75])U(.02,s-.14,(i-o)/2-.02,v.trim,n+e+.01,s/2+.02,p,a),Bi("z",n+e+.01-Te/2-.011+.012,p,1.45,(i-o)/2-.16,1.9,1,v.trim);U(.02,.4,.02,v.brass,n+e+.04,1.1,o+.04,a),U(.02,.4,.02,v.brass,n+e+.04,1.1,i-.04-(i-o)/2+.08,a);let g=ve(n+e+.01,0,t+0,0,a);g.rotation.y=-1.75,U(.02,s-.14,c-l-.02,v.trim,0,s/2+.02,(c-l)/2,g),U(.006,1.6,.4,v.mirror,.013,1.2,(c-l)/2,g);let x=ve(-3.4,0,5.68,0,a);for(let p of[-.33,.33])for(let b of[-.18,.18])U(.03,.45,.03,v.walnut,p,.225,b,x);U(.72,.03,.42,v.walnut,0,.45,0,x);for(let p=0;p<4;p++)U(.72,.006,.05,v.leatherB,0,.468,-.15+p*.1,x);for(let p of[-.18,.18])U(.66,.02,.025,v.walnut,0,.08,p,x);Kt(-3.4,5.68,.9,.6,.5);let m=new dn(16773340,0,2.2,2);m.position.set(r+.1,1.9,(l+c)/2),m.userData={n:1.2,always:.4},Be.add(m),yn.push(m)})();(function(){let n=Cs-.02,e=ve(n-.21,0,4.5,-Math.PI/2);It(1.3,.035,.38,.004,v.marbleG,0,.84,0,e);for(let i of[-.6,.6])for(let s of[-.16,.16])U(.02,.82,.02,v.brass,i,.41,s,e);U(1.22,.02,.02,v.brass,0,.12,.16,e),U(1.22,.02,.02,v.brass,0,.12,-.16,e),U(1.2,.012,.32,v.walnut,0,.13,0,e),Ec(n-.24,.86,4.15,v.petal,1.1,"ceramic"),Qe([[0,0],[.06,0],[.13,.03],[.14,.04],[0,.02]],v.brass,n-.22,.86,4.75,Be),Qe([[0,0],[.03,0],[.035,.09],[.012,.11],[.012,.13],[0,.13]],new ue({color:2828840,roughness:.1}),n-.25,.86,4.95,Be);for(let i=0;i<6;i++){let s=Ae(.002,.002,.28,v.walnut,n-.25+(Math.random()-.5)*.03,1.1,4.95+(Math.random()-.5)*.03);s.rotation.z=(Math.random()-.5)*.4}Ps(n-.25,.86,4.55,2,.3);let t=ve(n-.01,1.68,4.5,-Math.PI/2);It(1,1.15,.04,.02,v.brass,0,0,0,t),U(.92,1.07,.01,v.mirror,0,0,.02,t);for(let i of[3.7,5.3]){let s=ve(n-.06,1.7,i,-Math.PI/2);U(.08,.14,.02,v.brass,0,0,0,s);let r=Ae(.04,.04,.22,Sa(16447214,16767144,.05,1.6),0,.02,.06,s),o=new dn(16765600,0,2.5,2);o.position.set(n-.15,1.72,i),Be.add(o),yn.push(o)}Kt(n-.22,4.5,.6,1.5,.5)})();(function(){let n=ve(-2.5,0,4.5);Ae(.006,.006,.55,v.brass,0,Lt-.275,0,n);let e=new oe(new Li(.16,.16,.42,6,1,!0),v.showerGlass);e.position.y=2.2,n.add(e);for(let i=0;i<6;i++){let s=i/6*Math.PI*2+Math.PI/6;Ae(.006,.006,.42,v.brass,Math.cos(s)*.16,2.2,Math.sin(s)*.16,n,6)}Ae(.17,.17,.02,v.brass,0,2.42,0,n,6),Ae(.17,.12,.03,v.brass,0,1.985,0,n,6),vn(.04,v.led,0,2.2,0,n,10,8).userData.noShadow=!0;let t=new dn(16767398,0,5,2);t.position.set(-2.5,2.15,4.5),Be.add(t),yn.push(t)})();Ra(-2.15,5.3,1.5,.9,Re.rugDining,Re.rugLivingN);Rd("x",rt,-1.55,1.62,.75,.95,"gold",1);(function(){let n=Ti-.002,e=ve(-1.3,1.15,n,Math.PI);U(.09,.12,.015,v.trim,0,0,0,e),U(.06,.008,.01,v.black,0,.03,-.01,e),U(.054,.085,.003,v.brass,0,.055,-.008,e);let t=ve(-1.3,1.38,n,Math.PI);U(.09,.09,.012,v.trim,0,0,0,t),vn(.01,new Ht({color:16734794}),-.02,0,-.01,t,8,6),vn(.01,new Ht({color:7328667}),.02,0,-.01,t,8,6);let i=ve(Cs-Te/2-.01+0,1.4,3.5,-Math.PI/2);U(.09,.09,.012,v.panelGlass,0,0,0,i),U(.04,.015,.002,new Ht({color:10212351}),0,.01,.007,i)})();await ci(73,"load.furn");(function(){let n=rs+Te/2;U(.55,.42,2.7,v.walnut,n+.275,.62,5.1);let e=U(.01,.006,2.6,v.led,n+.54,.405,5.1);e.userData.noShadow=!0;for(let i of[4.42,5.78])U(.01,.012,.5,v.brass,n+.552,.78,i);It(.6,.04,2.76,.006,v.marble,n+.3,.86,5.1),U(.5,.02,2.6,v.walnut,n+.27,.18,5.1);for(let i=0;i<6;i++){let s=Vt(.3,.1,.16,.04,v.towel,n+.28,.25,4+i*.2,Be,.01);s.rotation.y=Math.PI/2}for(let i of[4.42,5.78]){Qe([[0,0],[.12,0],[.19,.06],[.2,.13],[.19,.135],[.18,.07],[.1,.025],[0,.025]],v.ceramic,n+.3,.88,i,Be,40);let s=ve(n+.01,1.06,i,0);Ae(.025,.025,.03,v.brass,0,0,0,s).rotation.z=Math.PI/2;let r=Ae(.012,.012,.2,v.brass,.1,0,0,s);r.rotation.z=Math.PI/2,Ae(.012,.012,.03,v.brass,.2,-.015,0,s);for(let l of[-1,1]){let c=ve(n+.02,1.06,i+l*.14,0);Ae(.02,.02,.04,v.brass,0,0,0,c).rotation.z=Math.PI/2,Ae(.008,.008,.06,v.brass,.04,.03,0,c)}let o=ve(n+.03,1.62,i,Math.PI/2);It(.7,.95,.02,.16,v.mirrorBath,0,0,.01,o,6);let a=It(.74,.99,.006,.17,v.led,0,0,-.006,o,6);a.userData.noShadow=!0}{let i=ve(n+.05,1.65,5.1,Math.PI/2);U(.06,.3,.02,v.brass,0,0,0,i),Ae(.035,.035,.26,Sa(16644851,16769720,.15,1.5),0,0,.06,i);let s=new dn(16769728,0,3,2);s.position.set(n+.25,1.65,5.1),s.userData={n:2.2,bath:1},Be.add(s),yn.push(s)}U(.28,.012,.2,v.brass,n+.38,.886,5.1);let t=new ue({color:2893604,roughness:.15});for(let i=0;i<3;i++)Qe([[0,0],[.025,0],[.025,.12],[.012,.135],[.006,.16],[0,.16]],t,n+.33+i*.06,.892,5.04+i*.04,Be,16);Qe([[0,0],[.03,0],[.03,.09],[0,.09]],v.ceramic,n+.42,.892,5.17,Be,16);for(let i=0;i<2;i++){let s=Ae(.004,.004,.16,v.ceramic,n+.42+(i-.5)*.01,.98,5.17);s.rotation.z=(i-.5)*.3}for(let i of[3.9,6.3]){let s=ve(n+.36,.88,i);for(let r=0;r<3;r++)Vt(.22,.035,.16,.015,v.towel,0,.02+r*.036,0,s,.004)}wc(n+.38,.88,6.5,.7),Kt(n+.3,5.1,.9,3,.5)})();(function(){let n=ve(7.1,0,6.4),e=2.05,t=Qe([[0,0],[.33,0],[.36,.04],[.41,.42],[.43,.56],[.42,.585],[.395,.585],[.39,.55],[.37,.2],[.33,.13],[0,.13]],new ue({color:16184560,roughness:.08}),0,0,0,n,64);t.scale.x=e;let i=new oe(new Xr(.385,64),v.water);i.rotation.x=-Math.PI/2,i.position.y=.45,i.scale.x=e*.985,n.add(i),i.userData.noShadow=!0,i.name="water";let s=ve(0,.59,0,0,n);U(.08,.02,.86,v.walnut,0,0,0,s);for(let l=0;l<5;l++)U(.18,.02,.03,v.walnut,0,0,-.32+l*.16,s);Ae(.035,.035,.08,v.ceramic,0,.05,-.15,s);let r=new oe(new Xo(.008,.03,8),(()=>{let l=new ue({color:16760944,emissive:16751152,emissiveIntensity:0});return l.userData={d:0,n:3,bed:!1},ba.push(l),l})());r.position.set(0,.105,-.15),s.add(r),Ps(0,.01,.12,1,.4,s),Qe([[0,0],[.03,0],[.004,.008],[.004,.07],[.03,.09],[.035,.14],[0,.09]],new ue({color:16777215,roughness:.02,transparent:!0,opacity:.3}),0,.01,.3,s,16);let o=ve(1,0,0,0,n);Ae(.05,.05,.02,v.brass,0,.01,0,o),Ae(.022,.022,.95,v.brass,0,.48,0,o);let a=new bs([new A(0,.95,0),new A(0,1.05,0),new A(-.12,1.08,0),new A(-.2,1,0)]);o.add(new oe(new qr(a,16,.018,10),v.brass));for(let l of[-1,1]){let c=Ae(.01,.01,.08,v.brass,0,.8,l*.04,o);c.rotation.x=Math.PI/2}Ae(.018,.018,.18,v.brass,.03,.6,0,o),Kt(7.1,6.4,2.1,1.1,.9),Ra(7.1,5.6,.95,.55,Re.fabric)})();(function(){let n=ve(5.6,0,6.6);Qe([[.15,0],[.16,.02],[.11,.06],[.1,.4],[.17,.43],[.17,.45],[0,.45]],v.walnut,0,0,0,n);for(let t=0;t<3;t++)Vt(.26,.04,.2,.016,v.towel,0,.47+t*.042,0,n,.005);Qe([[0,0],[.045,0],[.045,.1],[.03,.11],[.03,.13],[0,.13]],new ue({color:15327193,roughness:.15,transparent:!0,opacity:.8}),0,.6,0,n,16);let e=ve(4.55,0,6.85);Qe([[0,0],[.16,0],[.2,.4],[.19,.42],[0,.42]],v.vase,0,0,0,e);for(let t=0;t<9;t++){let i=new oe(Ad,v.leaf);i.scale.set(2.2,3.6,1),i.position.y=.4,i.rotation.set(-.25-Math.random()*.45,t*.7,(Math.random()-.5)*.4),e.add(i)}Kt(4.55,6.85,.6,.6,.5)})();fm(6,8.2,Xn,.9,2.5,-1,!1);(function(){let t=Gt-.01,i=rt+Te/2+.02;wa(8.6,t,i,4.5,v.showerFloor,.004),U(1,.012,.04,v.chrome,(8.6+t)/2,.012,4.5-.12);let s=(h,u,d,f,g)=>{let x=new oe(new kt(h,u),v.showerGlass);return x.position.set(d,u/2+.02,f),x.rotation.y=g,x.userData.noShadow=!0,Be.add(x),U(g?.02:h,.02,g?h:.02,v.brassD,d,u+.02,f),x};s(4.5-i,2.1,8.6,(i+4.5)/2,Math.PI/2),U(.02,2.1,.02,v.brassD,8.6,1.07,4.5),s(.55,2.1,8.6+.275,4.5,0);let r=ve(8.6+.55,0,4.5,-.65),o=new oe(new kt(.8,2.1),v.showerGlass);o.position.set(.4,1.07,0),o.userData.noShadow=!0,r.add(o),U(.02,.3,.02,v.brass,.72,1.05,.03,r),Ae(.012,.012,.25,v.chrome,(8.6+t)/2,Lt-.125,3.8),U(.32,.012,.32,v.chrome,(8.6+t)/2,Lt-.26,3.8);let a=ve(t,0,3.65,-Math.PI/2);Ae(.04,.04,.015,v.brass,0,1.1,.008,a).rotation.x=Math.PI/2,U(.04,.012,.08,v.brass,0,1.1,.04,a),U(.02,.7,.015,v.brass,.25,1.35,.01,a);let l=Ae(.018,.03,.22,v.brass,.25,1.45,.05,a);U(.01,.32,.6,v.showerFloor,t-.08,1.3,4);let c=U(.008,.006,.56,v.led,t-.06,1.455,4);c.userData.noShadow=!0;for(let h=0;h<3;h++)Qe([[0,0],[.025,0],[.025,.14],[.012,.16],[0,.16]],new ue({color:[2893604,15328218,2893604][h],roughness:.2}),t-.05,1.15,3.86+h*.12,Be,16);It(1.1,.06,.42,.01,v.bath,(8.6+t)/2,.46,i+.21),U(1.1,.44,.4,v.bath,(8.6+t)/2,.22,i+.2)})();(function(){let n=Gt-.04,e=5.05;for(let s of[-1,1])Ae(.012,.012,1.1,v.brass,n-.04,.85,e+s*.25);for(let s=0;s<6;s++){let r=Ae(.008,.008,.5,v.brass,n-.04,.38+s*.18,e);r.rotation.x=Math.PI/2}let t=Vt(.06,.7,.42,.02,v.towel,n-.08,1,e,Be,.005),i=ve(rs+Te/2+.03,1.78,6.95,Math.PI/2);U(.06,.02,.05,v.brass,0,0,.02,i),Vt(.55,1,.09,.04,v.robe,0,-.52,.07,i,.01)})();(function(){let t=Gt,i=Xn;ii(.08,Lt,i-5.6,v.bath,8.6,Lt/2,(5.6+i)/2,Be,2.4),ii(.15,Lt,.08,v.bath,8.6+.075,Lt/2,5.6,Be,2.4),ii(t-9.55,Lt,.08,v.bath,(9.55+t)/2,Lt/2,5.6,Be,2.4),ii(.8,Lt-2.2,.08,v.bath,(8.75+9.55)/2,2.2+(Lt-2.2)/2,5.6,Be,2.4);let s=ve(8.75,0,5.6,.9);U(.78,2.18,.03,v.frost,.39,1.1,0,s),U(.02,.3,.02,v.brass,.7,1.05,-.03,s);let r=ve(t-.02,0,6.45,-Math.PI/2);U(.42,.62,.02,v.ebony,0,.75,.01,r);let o=Qe([[0,0],[.17,0],[.19,.06],[.19,.16],[.15,.17],[0,.17]],v.ceramic,0,.24,.3,r,32);o.scale.z=1.35;let a=new oe(new _i(.15,.025,10,32),v.ceramic);a.rotation.x=Math.PI/2,a.scale.y=1.3,a.position.set(0,.43,.31),r.add(a),It(.36,.02,.48,.1,v.ceramic,0,.455,.29,r),U(.18,.12,.008,v.brass,0,1.05,.02,r);let l=ve(.32,.6,.04,0,r),c=Ae(.06,.06,.11,v.towel,0,0,.05,l);c.rotation.z=Math.PI/2,U(.14,.012,.1,v.brass,0,.07,.04,l)})();{let n=new dn(16773344,0,7,2);n.position.set(7,2.55,5.1),n.userData={n:3.2,bath:1},Be.add(n),yn.push(n)}var bi=new Wt;Be.add(bi);var ao=new Wt;Be.add(ao);(function(){let n=(a,l,c)=>{let h=new yi;h.moveTo(a[0][0],a[0][1]),h.lineTo(a[1][0],a[1][1]),h.lineTo(a[2][0],a[2][1]),h.closePath();let u=new oe(new Ys(h,{depth:.02,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),l);return u.rotation.x=Math.PI/2,u.position.y=c,bi.add(u),u};n([[8.35,-1],[9.05,-1],[9.05,-.32]],new ue({color:15658214,roughness:.95}),.655);let e=n([[8.35,-1],[9.05,-.32],[8.35,-.32]],new ue({color:16513783,roughness:.95,map:Re.fabric}),.7),t=new oe(new ws(.8,.012,.45,2,.005),v.towel);t.position.set(8.55,.007,-1.35),bi.add(t);for(let a of[-1,1]){let l=Vt(.1,.045,.27,.04,v.towel,8.55+a*.07,.035,-1.33,bi,.01);l.rotation.y=a*.06}let i=ve(9.05,.68,0,.3,bi);U(.1,.03,.1,new ue({color:3875862,roughness:.4}),0,.015,0,i),U(.102,.005,.025,v.brass,0,.031,0,i),U(.025,.005,.102,v.brass,0,.031,0,i),Qe([[0,0],[.035,0],[.035,.2],[.015,.23],[.015,.25],[0,.25]],new ue({color:13624298,roughness:.02,transparent:!0,opacity:.55}),9.7,.6,-1.3,bi,16),Qe([[0,0],[.035,0],[.038,.1],[.034,.1],[.031,.006],[0,.006]],new ue({color:16777215,roughness:.02,transparent:!0,opacity:.3}),9.62,.6,-1.22,bi,16);let s=ve(9.42,.6,-1.25,.3,bi),r=U(.1,.07,.003,v.ceramic,0,.03,-.012,s);r.rotation.x=.3;let o=U(.1,.07,.003,v.ceramic,0,.03,.012,s);o.rotation.x=-.3;for(let a=0;a<26;a++){let l=new oe(Td,v.petalR);l.rotation.x=-Math.PI/2,l.rotation.z=Math.random()*6,l.position.set(7.1+(Math.random()-.5)*1.2,.452,6.4+(Math.random()-.5)*.5),bi.add(l)}})();function ym(n){let[e,t]=tn(512,320);return t.fillStyle="#f7f3ea",t.fillRect(0,0,512,320),t.strokeStyle="#b8995c",t.lineWidth=4,t.strokeRect(14,14,484,292),t.fillStyle="#3a3226",t.textAlign="center",t.font='44px times-new-roman, "Times New Roman", "Pretendard Variable", serif',t.fillText(n[0],256,140),t.font='26px "Pretendard Variable", "Apple SD Gothic Neo", sans-serif',t.fillStyle="#7a6a50",t.fillText(n[1],256,200),t.font='22px anth, "Cormorant Garamond", "Pretendard Variable", serif',t.fillText(n[2]||"",256,245),xn(e)}var rr=new ue({roughness:.6}),_m={};(function(){let n=ve(.55,.45,.48,0,ao);Qe([[0,0],[.18,0],[.2,.025],[.19,.03],[0,.012]],v.ceramic,0,0,0,n,40);let e=[13781038,15249978,8037183,13781038,9120347,15249978,13597226];for(let o=0;o<9;o++){let a=o*2.3,l=.09*Math.sqrt(o/9)+.02;vn(.034+Math.random()*.012,new ue({color:e[o%7],roughness:.35}),Math.cos(a)*l,.05+o%3*.012,Math.sin(a)*l,n,14,10)}let t=ve(.25,.45,.62,-.3,ao),i=new oe(new kt(.16,.1),rr);i.position.set(0,.048,0),i.rotation.x=-.25,t.add(i),_m.mesh=i;let s=U(.16,.1,.002,v.ceramic,0,.048,-.025,t);s.rotation.x=.25;let r=ve(-5.55,.775,.2,0,ao);Qe([[0,0],[.08,0],[.11,.22],[.115,.23],[0,.22]],v.chrome,0,0,0,r,32),Qe([[0,0],[.038,0],[.038,.2],[.015,.27],[.015,.33],[0,.33]],new ue({color:1915430,roughness:.1}),0,.08,0,r,16),Ae(.017,.017,.04,v.brass,0,.42,0,r,10);for(let o of[-1,1])Qe([[0,0],[.03,0],[.004,.008],[.004,.1],[.022,.12],[.026,.21],[0,.12]],new ue({color:16774876,roughness:.02,transparent:!0,opacity:.4}),0,0,o*.17,r,16)})();var U_=U(1.9,.01,1.8,v.nightLed,8.55,.03,0);U_.userData.noShadow=!0;var Tc=new dn(16756848,0,3,2);Tc.position.set(8.55,.08,-1.2);Be.add(Tc);var Ob=function(){let n=ve(9.68,.6,1.22,-Math.PI/2),e=It(.16,.1,.03,.008,v.panelGlass,0,.05,0,n);e.rotation.x=-.45;let[t,i]=tn(256,160);i.fillStyle="#0b0b0c",i.fillRect(0,0,256,160),i.strokeStyle="#e8c98e",i.lineWidth=5;for(let r=0;r<5;r++)i.beginPath(),i.arc(30+r*49,80,16,0,7),i.stroke();i.fillStyle="#e8c98e",i.beginPath(),i.arc(30,80,7,0,7),i.fill();let s=new oe(new kt(.14,.088),new Ht({map:xn(t)}));return s.position.set(0,.055,.017),s.rotation.x=-.45,n.add(s),n}();await ci(78,"load.light");var ld=new Dl(15856895,7033408,1);at.add(ld);var Ei=new Ll(16774114,3);Ei.position.set(-3,9,-14);Ei.target.position.set(.5,0,1.5);Ei.castShadow=!0;Ei.shadow.mapSize.set(fn.low?2048:4096,fn.low?2048:4096);Object.assign(Ei.shadow.camera,{left:-12,right:12,top:11,bottom:-11,near:1,far:50});Ei.shadow.bias=-3e-4;Ei.shadow.normalBias=.02;Ei.shadow.radius=5;at.add(Ei,Ei.target);ot.shadowMap.autoUpdate=!1;ot.shadowMap.needsUpdate=!0;var Cd=[];Object.values(Ta).forEach(([n,e])=>{let t=new Ui(14674165,0,14,1.1,1,1.6);t.position.set((n+e)/2,2.1,En-1.4),t.target.position.set((n+e)/2,.3,En+3.2),Be.add(t,t.target),t.userData.w=(e-n)/2.4,Cd.push(t)});var po=new Ui(15134456,0,10,1.1,1,1.6);po.position.set(7.1,2,Xn+1.2);po.target.position.set(7.1,.3,Xn-2.6);Be.add(po,po.target);var Mm=new Ul(16767400,0);at.add(Mm);function fc(n){return n.y>3.2?"overview":n.z>rt+.02?n.x<1.5?"foyer":"bath":n.x<-4?"dining":n.x<4?"living":"bedroom"}var ga={point:[],spot:[],rect:[]},Pd=["foyer","living","dining","bedroom","bath"],N_={foyer:["foyer","living"],living:["living","dining","foyer"],dining:["dining","living"],bedroom:["bedroom","bath"],bath:["bath","bedroom"],overview:Pd};function O_(n){n.updateMatrixWorld(!0);let e=n.getWorldPosition(new A),t={l:n,type:n.isRectAreaLight?"rect":n.isSpotLight?"spot":"point",pos:e,zone:fc(new A(e.x,1,e.z)),score:0};t.type==="spot"&&(t.tgt=n.target.getWorldPosition(new A),n.target.parent?.remove(n.target)),t.type==="rect"&&(t.quat=n.getWorldQuaternion(new Ln)),n.parent?.remove(n),ga[t.type].push(t)}[...yn,Tc,...Cd,po].forEach(O_);var Vp=6,Bn={point:[],spot:[],rect:[]},lo={point:fn.low?6:8,spot:fn.low?4:5,rect:0};for(let n=0;n<lo.point;n++){let e=new dn(16777215,0,5,2);at.add(e),Bn.point.push(e)}for(let n=0;n<lo.spot;n++){let e=new Ui(16777215,0,5,.5,.5,2);at.add(e,e.target),Bn.spot.push(e)}for(let n=0;n<lo.rect;n++){let e=new Nl(16777215,0,1,1);at.add(e),Bn.rect.push(e)}var Gp="",F_={foyer:new A(-2.5,1.5,4.5),living:new A(0,1.5,0),dining:new A(-6.5,1.5,0),bedroom:new A(7,1.5,0),bath:new A(7,1.5,5.1)};function _a(n){let e=fc(Ge.position),t=N_[e]||Pd,i=e;if(!(!n&&i===Gp)){Gp=i;for(let s of["point","spot","rect"]){let r=ga[s];for(let a of r){let l=a.l.intensity;if(l<=1e-4){a.score=-1;continue}let c=a.pos.distanceToSquared(F_[e]||Ge.position);a.score=(t.includes(a.zone)?1e6:0)+l*(s==="rect"?a.l.width*a.l.height:1)/(1+.05*c)}let o=r.filter(a=>a.score>0).sort((a,l)=>l.score-a.score);Bn[s].forEach((a,l)=>{let c=o[l];if(!c){a.intensity=0;return}let h=c.l;a.color.copy(h.color),a.intensity=h.intensity,a.position.copy(c.pos),s!=="rect"&&(a.distance=h.distance,a.decay=h.decay),s==="spot"&&(a.angle=h.angle,a.penumbra=h.penumbra,a.target.position.copy(c.tgt),a.target.updateMatrixWorld()),s==="rect"&&(a.width=h.width,a.height=h.height,a.quaternion.copy(c.quat))})}}}Be.traverse(n=>{let e=n.isMesh&&n.geometry.attributes.normal;if(!e)return;let t=e.array;for(let i=0;i<t.length;i+=3)t[i]*t[i]+t[i+1]*t[i+1]+t[i+2]*t[i+2]>1e-8||(t[i]=0,t[i+1]=1,t[i+2]=0);e.needsUpdate=!0});Be.traverse(n=>{n.isMesh&&(n.castShadow=!n.userData.noShadow&&!n.userData.noCast&&!n.userData.noShadowCast&&!(n.material&&n.material.transparent),n.receiveShadow=!n.userData.noShadow)});Ot.traverse(n=>{n.isMesh&&(n.castShadow=!0)});await ci(86,"load.shader");function id(n,e){let t=new Map,i=[];for(let s of e){let r=s.material.uuid+"|"+(s.castShadow?1:0)+(s.receiveShadow?1:0),o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.attributes.uv||o.setAttribute("uv",new Je(new Float32Array(o.attributes.position.count*2),2)),o.attributes.normal||o.computeVertexNormals(),o.clearGroups(),o.applyMatrix4(s.matrixWorld),t.has(r)||t.set(r,{m:s.material,c:s.castShadow,r:s.receiveShadow,g:[],o:[]});let a=t.get(r);a.g.push(o),a.o.push(s)}for(let s of t.values()){if(s.o.length<2){s.g.forEach(a=>a.dispose()),i.push(...s.o);continue}let r=Op(s.g,!1);if(s.g.forEach(a=>a.dispose()),!r){i.push(...s.o);continue}r.computeBoundingSphere();let o=new oe(r,s.m);o.castShadow=s.c,o.receiveShadow=s.r,s.m.transparent&&(o.renderOrder=1),n.add(o),i.push(o),s.o.forEach(a=>a.parent&&a.parent.remove(a))}return i}function Wp(n,e,t){let i=[];return n.updateMatrixWorld(!0),n.traverse(s=>{if(!(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material))&&!(s.material.transparent&&!(t&&s.userData.blob))){for(let r=s;r&&r!==n.parent;r=r.parent)if(e.has(r))return;i.push(s)}}),i}if(!window.__noMerge){let n=new Set([...si,cr,Zt,...is.map(t=>t.g),...bd.map(t=>t.g),...Sd.map(t=>t.g),bi,ao,...Sc]);at.updateMatrixWorld(!0);let e=id(Be,si.filter(t=>t.isMesh&&!t.material.transparent));si.length=0,si.push(...e),id(Ot,Wp(Ot,n)),n.add(Ot),e.forEach(t=>n.add(t)),id(Be,Wp(Be,n,!0))}var B_={living:new A(.2,1.4,.3),bed:new A(7.2,1.3,0),bath:new A(6.6,1.4,5)},bm=new Ho(fn.low?64:128,{type:Yt}),Xp=new zo(.05,100,bm),er={},$s=null;function z_(){$s||($s={keys:["living","bed","bath"],next:{}});let n=$s.keys.shift(),e=B_[n],t=Ot.visible;Ot.visible=!0;let i=si.map(a=>a.visible);si.forEach(a=>a.visible=!0);let s=at.environment,r=at.environmentIntensity;at.environment=vd,at.environmentIntensity=.25;let o=Ge.position.clone();return Ge.position.set(e.x,1.5,e.z),_a(!0),Xp.position.copy(e),Xp.update(ot,at),$s.next[n]=am.fromCubemap(bm.texture).texture,Ge.position.copy(o),_a(!0),at.environment=s,at.environmentIntensity=r,Ot.visible=t,si.forEach((a,l)=>a.visible=i[l]),$s.keys.length?!0:(Object.values(er).forEach(a=>a.dispose()),er=$s.next,$s=null,at.environment=er.living,v.mirror.envMap=er.bed,v.mirror.needsUpdate=!0,v.mirrorBath.envMap=er.bath,v.mirrorBath.needsUpdate=!0,v.water.envMap=er.bath,v.water.needsUpdate=!0,!1)}var ei=!fn.low,wn=new jl(ot);wn.setPixelRatio(In);wn.setSize(innerWidth,innerHeight);wn.addPass(new Kl(at,Ge));var ai=new oa(at,Ge,innerWidth,innerHeight);ai.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1.2,scale:1.1,samples:8,distanceFallOff:1,screenSpaceRadius:!1});ai.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:10});ai.blendIntensity=.85;{let n=ai.setSize.bind(ai);ai.setSize=(e,t)=>n(Math.max(1,e>>1),Math.max(1,t>>1))}wn.addPass(ai);var ti=new nc(at,Ge,{focus:3,aperture:.0018,maxblur:.0042});ti.enabled=!1;wn.addPass(ti);var ts=new eo(new Y(innerWidth>>1,innerHeight>>1),.2,.38,1.35);{let n=ts.setSize.bind(ts);ts.setSize=(e,t)=>n(Math.max(1,e>>1),Math.max(1,t>>1))}wn.addPass(ts);wn.addPass(new $l);var xa=new tc(innerWidth*In,innerHeight*In);wn.addPass(xa);var co={welcome:{tod:0,lamp:.75,cove:.7,curtain:0,bed:.75,nl:0,td:0,wel:1},day:{tod:0,lamp:.1,cove:.2,curtain:0,bed:.1,nl:0,td:0,wel:0},evening:{tod:.9,lamp:1,cove:1,curtain:0,bed:1,nl:0,td:0,wel:0},turndown:{tod:1,lamp:.28,cove:.3,curtain:1,bed:1,nl:0,td:1,wel:0},sleep:{tod:1,lamp:0,cove:0,curtain:1,bed:0,nl:1,td:1,wel:0}},pc="welcome",zn={...co.welcome},ns={...co.welcome},or=!0,$i=!0,$e=8,cd=!1,mc=1,wt={on:!1,tok:0,dof:null,mode:null},Rn=Es.lerp;function xo(n){let e=n.tod*n.tod*(3-2*n.tod),t=n.curtain;ld.intensity=Rn(.75,.05,e)*(1-.55*t),ld.color.setHex(15856895).lerp(new Ye(4212842),e),Ei.intensity=Rn(3,0,e)*(1-.92*t),Cd.forEach(s=>s.intensity=Vp*s.userData.w*Rn(5,.15,e)*(1-.85*t)),po.intensity=Vp*.9*Rn(4,.1,e)*(1-.8*t),pm.forEach(s=>s.emissiveIntensity=.08+1.15*n.cove),Mm.intensity=.32*n.cove*Math.max(e,.35)+.05*n.lamp;let i=Math.max(n.lamp,.55*(1-n.nl)*(1-e*.4));yn.forEach(s=>{let r=s.userData,o=r.bed?n.bed:r.bath?i:Math.max(n.lamp,(r.always||0)*(1-n.nl));s.intensity=(r.n??(s.isSpotLight?9:4.2))*o}),ba.forEach(s=>{let r=s.userData,o=r.bed?n.bed:n.lamp;s.emissiveIntensity=Rn(r.d??.05,r.n??1.6,o)}),v.cove.color.setHex(16773596).multiplyScalar(.5+1.7*n.cove),v.led.color.setHex(16769720).multiplyScalar(.7+1.9*Math.max(n.cove,n.lamp*.8)),v.nightLed.color.setHex(16756848).multiplyScalar(2.2*n.nl),Tc.intensity=1.4*n.nl,lr.night.forEach(s=>s.material.opacity=e),v.sheer.opacity=Rn(.32,.22,e),bd.forEach(s=>{s.g.position.x=Rn(s.a,s.b,t),s.g.scale.x=Rn(1,s.sc,t)}),Sd.forEach(s=>{s.g.scale.y=Rn(.08,s.full,t)}),ot.toneMappingExposure=Rn(1,.95,e)*(n.nl>.5?1.25:1),at.environmentIntensity=Rn(.55,.3,e)*(.5+.5*Math.max(n.lamp,n.cove,1-e)),ts.strength=Rn(.14,.22,e),ts.threshold=Rn(1.35,1.7,e),ts.enabled=e>.25&&!fn.low,bi.visible=n.td>.5,ao.visible=n.wel>.5,ot.shadowMap.needsUpdate=!0,_a(!0),$e=Math.max($e,2)}xo(zn);function vo(n){co[n]&&(n!==pc&&!Si&&Hn.pv("/scene/"+n),co[n].tod>0&&_d(!0),pc=n,Object.assign(ns,co[n]),$i=!0,document.querySelectorAll("#scenes button,#cardScenes button").forEach(e=>e.classList.toggle("on",e.dataset.s===n)),he("tod").textContent=Tt("scene."+n))}var Sm=[{id:"entry",z:"foyer",p:[-1.3,1.3,5.9],v:{p:[-2,1.55,4.2],t:[-1.3,1.25,6]}},{id:"closet",z:"foyer",p:[-3.9,1.5,4],v:{p:[-2.3,1.55,4],t:[-4.3,1.25,4.3]}},{id:"view",z:"living",p:[1.5,1.7,-2.9],v:{p:[1.2,1.5,-.4],t:[2.4,1.75,-6]}},{id:"lounge",z:"living",p:[.2,.9,.4],v:{p:[2.2,1.6,2.4],t:[0,.7,-.4]}},{id:"dining",z:"dining",p:[-6.5,1.05,.2],v:{p:[-4.5,1.7,1.9],t:[-6.8,.8,0]}},{id:"lattice",z:"dining",p:[-8.85,1.6,.8],v:{p:[-5.6,1.55,.4],t:[-9,1.4,.2]}},{id:"minibar",z:"dining",p:[-5,1.2,2.6],v:{p:[-5.2,1.5,.9],t:[-5.2,1.2,2.9]}},{id:"bed",z:"bedroom",p:[8.4,.95,.3],v:{p:[5.4,1.6,1.6],t:[8.6,.8,0]}},{id:"panel",z:"bedroom",p:[9.68,.78,1.22],v:{p:[8.3,1.3,2.2],t:[9.7,.7,1.2]},act:"scenes"},{id:"desk",z:"bedroom",p:[4.4,1,-.35],v:{p:[6.6,1.55,.6],t:[4.3,1,-.3]}},{id:"nook",z:"bedroom",p:[5,1.5,2.75],v:{p:[6.9,1.5,.2],t:[4.9,1,2.4]}},{id:"tub",z:"bath",p:[7.1,.8,6.4],v:{p:[5.3,1.5,4.6],t:[7.4,.6,6.6]},act:"water"},{id:"shower",z:"bath",p:[9.3,1.6,3.8],v:{p:[7,1.6,5],t:[9.4,1.3,3.6]}},{id:"vanity",z:"bath",p:[4.4,1.3,5.1],v:{p:[6.6,1.6,5.1],t:[4.2,1.2,5.1]}}],li={foyer:{p:[-1.15,1.6,5.6],t:[-3.3,1.1,2.2]},living:{p:[1.75,1.5,2.65],t:[-.9,1.05,-1.2]},dining:{p:[-4.3,1.55,2.35],t:[-7.6,1.15,-.3]},bedroom:{p:[4.75,1.6,2.2],t:[8.6,.95,-.6]},bath:{p:[5.25,1.62,3.55],t:[8.1,.9,6.3]},window:{p:[1.2,1.5,-.4],t:[2.4,1.75,-6]},overview:{p:[.6,19.5,15.5],t:[.6,0,2]}},ir=[{v:"foyer",sc:"welcome",hold:1,cap:["sp.foyer","tour.foyer"]},{hs:"closet"},{v:"living",sc:"welcome",cap:["sp.living","tour.living"]},{hs:"view",sc:"day"},{v:"dining",cap:["sp.dining","tour.dining"]},{hs:"minibar"},{v:"bedroom",sc:"evening",cap:["sp.bedroom","tour.bedroom"]},{hs:"desk"},{v:"bath",cap:["sp.bath","tour.bath"]},{hs:"tub"},{v:"bedroom",sc:"turndown",cap:["scene.turndown","tour.turndown"]},{v:"overview",sc:"welcome",cap:["sp.overview","tour.end"]}],Id=[[-9,-4,-3,3],[-4,4,-3,3],[4,10,-3,3],[ur,Cs,3,Ti],[rs,Gt,3,Xn]],H_=Id.map(([n,e,t,i])=>[n+.3,e-.3,t+.3,i-.3]),Em=[[-4.5,-3.5,-2,2],[3.5,4.5,-2.45,-1.75],[-3.45,-2.75,2.5,3.5],[6.85,7.45,2.5,3.5]],ic=(n,e)=>H_.some(([t,i,s,r])=>n>=t&&n<=i&&e>=s&&e<=r)||Em.some(([t,i,s,r])=>n>=t&&n<=i&&e>=s&&e<=r),qp=(n,e)=>Id.findIndex(([t,i,s,r])=>n>=t&&n<=i&&e>=s&&e<=r),Yp=(n,e)=>Id.findIndex(([t,i,s,r])=>n>t&&n<i&&e>s&&e<r),k_=Em.map(([n,e,t,i])=>{let s=(n+e)/2,r=(t+i)/2;for(let o of[[1,0],[0,1]]){let a=Yp(s-o[0]*.9,r-o[1]*.9),l=Yp(s+o[0]*.9,r+o[1]*.9);if(a>=0&&l>=0&&a!==l)return{c:[s,r],n:o,r:[a,l]}}return null}).filter(Boolean);function V_(n,e){let t=qp(n.x,n.z),i=qp(e.x,e.z);if(t<0||i<0||t===i||n.y>3||e.y>3)return null;let s={[t]:null},r=[t];for(;r.length;){let c=r.shift();if(c===i)break;for(let h of k_){let u=h.r.indexOf(c);if(u<0)continue;let d=h.r[1-u];d in s||(s[d]={r:c,d:h,s:u===0?1:-1},r.push(d))}}if(!(i in s))return null;let o=[];for(let c=i;s[c];c=s[c].r)o.unshift(s[c]);let a=[n.clone()],l=o.length;return o.forEach((c,h)=>{let u=Es.lerp(n.y,e.y,(h+1)/(l+1)),[d,f]=c.d.c,[g,x]=c.d.n;a.push(new A(d-g*c.s*rc,u,f-x*c.s*rc),new A(d+g*c.s*rc,u,f+x*c.s*rc))}),a.push(e.clone()),a}var gc=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches,Hn=(()=>{let n=r=>{try{window.va&&window.va("pageview",{route:r,path:r})}catch{}},e=null,t=0,i=0,s=!1;return{pv:n,start(r){s=!0,n("/enter/"+r)},zone(r){e=r,t=0,i=0},tick(r){if(!s||!e)return;t+=r;let o=t>=4?1+Math.floor((t-4)/30):0;for(;i<o;)i++,n("/room/"+e)}}})();Hn.pv("/intro");var bt=null;function Is(n,e,t=2,i=null,s=0,r={}){let o=Ge.position.clone(),a=new A(...n),l=null,c=t;t>.1&&!r.raw&&(c=t*G_);let h=gc||r.route===!1?null:V_(o,a);h&&(l=new bs(h,!1,"centripetal",.5),c=Es.clamp(l.getLength()/(r.mps||W_),r.raw?t:c,X_));let u=l?is.filter(d=>l.getSpacedPoints(60).some(f=>(f.x-d.c[0])**2+(f.z-d.c[1])**2<.5)):[];bt={p0:o,t0:Rt.target.clone(),p1:a,t1:new A(...e),curve:l,doors:u,s:performance.now()+s,d:(gc?.05:c)*1e3,done:i},$e=Math.max($e,2)}var to=new A,sd=new A,sc=new A,G_=1.8,W_=.95,X_=10,q_=2.4,rc=1.15,Y_=(n,e=.32)=>{let t=1/(1-e);return n<e?t*n*n/(2*e):n>1-e?1-t*(1-n)*(1-n)/(2*e):t*(e/2+n-e)},Z_=n=>-(Math.cos(Math.PI*n)-1)/2,Zp=new A;var jp=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},hd=!1;function Ac(n,e=2){let t=li[n];if(t&&(Is(t.p,t.t,e),(Pd.includes(n)||n==="overview")&&location.hash.slice(1)!==n)){hd=!0;try{location.hash=n}catch{}}}addEventListener("hashchange",()=>{if(hd){hd=!1;return}let n=location.hash.slice(1);li[n]&&(wi(),os(),Ac(n))});var he=n=>document.getElementById(n),Kp=[{k:"dining",x0:-9,x1:-4,z0:-3,z1:3},{k:"living",x0:-4,x1:4,z0:-3,z1:3},{k:"bedroom",x0:4,x1:10,z0:-3,z1:3},{k:"foyer",x0:ur,x1:Cs,z0:3,z1:Ti},{k:"bath",x0:rs,x1:Gt,z0:3,z1:Xn}];function j_(){let n=he("planSvg");n.setAttribute("viewBox","-9.5 -3.5 20 11.1");let e="";for(let t of Kp)e+=`<rect class="rm" data-k="${t.k}" x="${t.x0}" y="${t.z0}" width="${t.x1-t.x0}" height="${t.z1-t.z0}" rx=".15" tabindex="0" role="button" aria-label="${Tt("sp."+t.k)}"><title>${Tt("sp."+t.k)}</title></rect>`;for(let[t,i]of Object.values(Ta))e+=`<line class="win" x1="${t}" y1="-3" x2="${i}" y2="-3"/>`;e+=`<line class="win" x1="6" y1="${Xn}" x2="8.2" y2="${Xn}"/>`;for(let t of Kp)e+=`<text class="lb" x="${(t.x0+t.x1)/2}" y="${(t.z0+t.z1)/2+.22}">${Tt("nav."+t.k)}</text>`;for(let t of Sm)e+=`<circle class="dot" data-h="${t.id}" cx="${t.p[0]}" cy="${t.p[2]}" r=".22"><title>${fo[t.id][Cn][0]}</title></circle>`;e+='<g id="me"><path class="cone" d="M0 0 L2.4 -1.1 A2.6 2.6 0 0 1 2.4 1.1 Z"/><circle class="me" r=".32"/></g>',n.innerHTML=e,n.querySelectorAll(".rm").forEach(t=>{let i=()=>{wi(),os(),Ac(t.dataset.k)};t.addEventListener("click",i),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),i())})}),n.querySelectorAll(".dot").forEach(t=>t.addEventListener("click",i=>{i.stopPropagation(),wi();let s=ri.find(r=>r.id===t.dataset.h);Ca(s.id),Is(s.v.p,s.v.t,1.8)}))}function Dd(){document.documentElement.lang=Cn;{let n={ja:"fonts/pretendard-jp.css",zh:"https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500&display=swap"}[Cn];if(n&&!document.querySelector('link[data-lf="'+Cn+'"]')){let e=document.createElement("link");e.rel="stylesheet",e.href=n,e.dataset.lf=Cn,document.head.appendChild(e)}}document.querySelectorAll("[data-i]").forEach(n=>{n.innerHTML=Tt(n.dataset.i)}),he("hotel").textContent=Pn(gt.hotel)+" \xB7 "+Pn(gt.city),he("roomName").textContent=Pn(gt.room),he("introHotel")&&(he("introHotel").textContent=he("hotel").textContent,he("introRoom").textContent=Pn(gt.room)),he("iArea").textContent=gt.area+" \u33A1",he("iBed").textContent=Pn(gt.bed),he("iGuests").textContent=gt.guests,he("iFloor").textContent=gt.floor,he("iView").textContent=Tt("ui.viewv"),he("infoToggle").innerHTML=`<span class="rnm">${Pn(gt.room)} \xB7 </span><b>${gt.area}\u33A1</b>`,he("chips").innerHTML=Tt("ui.am").map(n=>`<span>${n}</span>`).join(""),he("mHQ").querySelector(".v").textContent=Tt(ei?"ui.hqv":"ui.sqv"),document.querySelectorAll(".lang button").forEach(n=>n.classList.toggle("on",n.dataset.l===Cn)),he("tod").textContent=Tt("scene."+pc),rr.map?.dispose(),rr.map=ym([Tt("ui.welcome"),gt.guest,Pn(gt.hotel)]),rr.needsUpdate=!0,ri.forEach(n=>{n.el.dataset.label=fo[n.id][Cn][0],n.el.setAttribute("aria-label",fo[n.id][Cn][0])}),j_(),Rs&&Ca(Rs),Si&&hr(ni,!1),pd=null,$e=Math.max($e,2)}document.querySelectorAll(".lang button").forEach(n=>n.addEventListener("click",()=>{Cn=n.dataset.l,Dd()}));document.querySelectorAll("#scenes button").forEach(n=>n.addEventListener("click",()=>{yo(),vo(n.dataset.s)}));he("infoToggle").addEventListener("click",()=>{he("info").classList.toggle("open"),os()});function zi(n,e=3200){let t=he("toast");t.textContent=n,t.classList.add("show"),clearTimeout(zi.t),zi.t=setTimeout(()=>t.classList.remove("show"),e)}he("book").addEventListener("click",n=>{Hn.pv("/cta/book"),gt.bookingUrl||(n.preventDefault(),zi(Tt("ui.bookToast")))});gt.bookingUrl&&(he("book").href=gt.bookingUrl);var ri=Sm.map(n=>{let e=document.createElement("button");return e.className="hsp",e.innerHTML="<i></i>",e.addEventListener("click",t=>{t.stopPropagation(),yo(),Ca(n.id)}),he("hs").appendChild(e),{...n,el:e,v3:new A(...n.p)}}),Rs=null;function Ca(n){let e=ri.findIndex(r=>r.id===n),t=ri[e];Rs!==n&&!Si&&Hn.pv("/hotspot/"+n),Rs=n,document.body.classList.add("card-open");let[i,s]=fo[n][Cn];he("cardNo").textContent=`${e+1} / ${ri.length}`,he("cardT").textContent=i,he("cardD").textContent=s,he("cardScenes").style.display=t.act==="scenes"?"flex":"none",he("card").classList.add("show"),he("info").classList.remove("open"),he("cardGo").onclick=()=>{wi(),Is(t.v.p,t.v.t,1.8),t.act==="water"&&fd()},t.act==="water"&&fd()}function wm(n){let e=ri.findIndex(i=>i.id===Rs),t=ri[(e+n+ri.length)%ri.length];wi(),Ca(t.id),Is(t.v.p,t.v.t,1.8)}function os(){Rs=null,he("card").classList.remove("show"),document.body.classList.remove("card-open")}he("cardX").addEventListener("click",os);he("cardPrev").addEventListener("click",()=>wm(-1));he("cardNext").addEventListener("click",()=>wm(1));document.querySelectorAll("#cardScenes button").forEach(n=>n.addEventListener("click",()=>vo(n.dataset.s)));var ua=new _s,Jp=new A;function K_(n){ua.origin.copy(Ge.position),ua.direction.subVectors(n,Ge.position);let e=ua.direction.length();ua.direction.multiplyScalar(1/e);for(let t of dm)if(ua.intersectBox(t,Jp)&&Jp.distanceTo(Ge.position)<e-.15)return!0;return!1}var Si=!1,ni=0;var ss=!1,ud=0,Qp=6e3;function J_(n){if(n.hs){let t=ri.find(i=>i.id===n.hs);return{title:fo[n.hs][Cn][0],desc:fo[n.hs][Cn][1],p:t.v.p,t:t.v.t,zone:t.z}}let e=li[n.v];return{title:Tt(n.cap[0]),desc:Tt(n.cap[1]).replace("{area}",gt.area),p:e.p,t:e.t}}function hr(n,e=!0){ni=(n+ir.length)%ir.length;let t=ir[ni],i=J_(t);he("capStep").textContent=`${ni+1} / ${ir.length}`,he("cap").classList.remove("min"),clearTimeout(hr.t),hr.t=setTimeout(()=>he("cap").classList.add("min"),4500),he("capT").textContent=i.title,he("capD").textContent=i.desc,he("tProg").innerHTML=ir.map((s,r)=>`<i class="${r<ni?"done":""}">${r===ni?"<b></b>":""}</i>`).join(""),e&&(t.sc&&(vo(t.sc),t.hold&&(ns.curtain=1)),Is(i.p,i.t,2.6),t.hs==="tub"&&fd(),ud=0)}function dd(){wt.on&&Nd(),Hn.pv("/tour/start"),os(),he("info").classList.remove("open"),Si=!0,ss=!1,document.body.classList.add("touring"),he("tPlay").textContent="\u275A\u275A",hr(0)}function wi(){Si&&(Si=!1,document.body.classList.remove("touring"))}function yo(){Si&&!ss&&(ss=!0,he("tPlay").textContent="\u25B6")}function Ld(){Si&&ss&&(ss=!1,he("tPlay").textContent="\u275A\u275A")}he("tourBtn").addEventListener("click",dd);he("cap").addEventListener("click",n=>{n.target.closest("button")||he("cap").classList.toggle("min")});he("tX").addEventListener("click",wi);he("tPrev").addEventListener("click",()=>{ni>0&&hr(ni-1),ss&&Ld()});he("tNext").addEventListener("click",()=>{if(ni>=ir.length-1){Hn.pv("/tour/complete"),wi(),he("info").classList.add("open");return}hr(ni+1),ss&&Ld()});he("tPlay").addEventListener("click",()=>ss?Ld():yo());Rt.addEventListener("start",()=>{bt=null,yo()});var xc=0;Rt.addEventListener("change",()=>{xc=performance.now(),$e=Math.max($e,2)});var vc=!1;function Q_(n){n!==vc&&(vc=n,n||($e=Math.max($e,1)))}he("moreBtn").addEventListener("click",n=>{n.stopPropagation(),he("menu").classList.toggle("open")});addEventListener("click",n=>{he("more").contains(n.target)||he("menu").classList.remove("open")});function Rc(n){ei=n,vc=!1,he("mHQ").classList.toggle("on",ei),he("mHQ").querySelector(".v").textContent=Tt(ei?"ui.hqv":"ui.sqv"),ai.enabled=ei,xa.enabled=ei||!fn.low,In=ei?Math.min(devicePixelRatio,fn.mid?1.25:1.5):1,ot.setPixelRatio(In),wn.setPixelRatio(In),Ud()}he("mHQ").addEventListener("click",()=>Rc(!ei));he("mFS").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{zi("Full screen unavailable here")}});var ro=!1;he("mPerf").addEventListener("click",()=>{ro=!ro,he("perf").classList.toggle("on",ro),he("mPerf").classList.toggle("on",ro),he("mPerf").querySelector(".v").textContent=ro?"ON":"OFF",$e=Math.max($e,2)});var jt=null,sr=!1,Tm=0,ho={};function cc(n){let e=jt.sampleRate*4,t=jt.createBuffer(1,e,jt.sampleRate),i=t.getChannelData(0),s=0;for(let r=0;r<e;r++){let o=Math.random()*2-1;n?(s=(s+.02*o)/1.02,i[r]=s*3.5):i[r]=o}return t}function rd(n,e,t,i){let s=jt.createBufferSource();s.buffer=n,s.loop=!0;let r=jt.createBiquadFilter();r.type=e,r.frequency.value=t,i&&(r.Q.value=i);let o=jt.createGain();return o.gain.value=0,s.connect(r).connect(o).connect(jt.destination),s.start(),o}he("mSound").addEventListener("click",()=>{try{jt||(jt=new(window.AudioContext||window.webkitAudioContext),ho.city=rd(cc(!0),"lowpass",380),ho.air=rd(cc(!1),"lowpass",900),ho.water=rd(cc(!1),"bandpass",1700,.7)),sr=!sr,sr&&jt.resume(),he("mSound").classList.toggle("on",sr),he("mSound").querySelector(".v").textContent=sr?"ON":"OFF"}catch{zi("Audio unavailable")}});function fd(){Tm=performance.now()+7e3}var gn=null,tr=null;"ontouchstart"in window&&(he("mGyro").style.display="");he("mGyro").addEventListener("click",async()=>{if(gn){gn=null,tr=null,he("mGyro").classList.remove("on"),he("mGyro").querySelector(".v").textContent="OFF";return}try{if(typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission&&await DeviceOrientationEvent.requestPermission()!=="granted")throw 0}catch{zi(Tt("ui.gyroNo"));return}let n=!1;gn={a:0,b:0},he("mGyro").classList.add("on"),he("mGyro").querySelector(".v").textContent="ON",window.__gyroL||(window.__gyroL=!0,addEventListener("deviceorientation",e=>{!gn||e.alpha==null||(gn.got=!0,gn.a=e.alpha,gn.b=e.beta,$e=2)})),setTimeout(()=>{(!gn||!gn.got)&&(gn=null,he("mGyro").classList.remove("on"),he("mGyro").querySelector(".v").textContent="OFF",zi(Tt("ui.gyroNo")))},1500)});var $p=new Ol,em=new Y;Mc.addEventListener("dblclick",n=>{em.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),$p.setFromCamera(em,Ge);let e=$p.intersectObjects(Sc)[0];if(!e)return;yo();let t=e.point,i=new A().subVectors(Rt.target,Ge.position);i.y=0,i.lengthSq()<1e-4&&i.set(0,0,-1),i.normalize();let s=new A(t.x,1.55,t.z).addScaledVector(i,2.5);s.y=1.2,Is([t.x,1.55,t.z],[s.x,s.y,s.z],1.4)});var Ni={};addEventListener("keydown",n=>{n.target.closest&&n.target.closest("button,a")||(Ni[n.key.toLowerCase()]=!0,n.key==="Escape"&&(os(),wi()))});addEventListener("keyup",n=>{Ni[n.key.toLowerCase()]=!1});function Ud(){Ge.aspect=innerWidth/innerHeight,Ge.updateProjectionMatrix(),ot.setSize(innerWidth,innerHeight),wn.setSize(innerWidth,innerHeight),$e=Math.max($e,2)}addEventListener("resize",Ud);var $_=new jr,eM=new A,no=new A,od=new A,oo=!1,pd=null;var tM=0,oc=0,io=[],tm=0;var da=[],fa=0,pa=0,ad=!1,nm=!1;function ma(){if(oo){requestAnimationFrame(ma);return}let n=Math.min($_.getDelta(),.1),e=performance.now();Hn.tick(n);let t=Math.min(.5,(e-(ma.lastNow||e))/1e3);if(ma.lastNow=e,Math.abs(ln.tk-ln.k)>.001){ln.k+=Math.sign(ln.tk-ln.k)*Math.min(Math.abs(ln.tk-ln.k),t/1.7);let o=ln.k*ln.k*(3-2*ln.k);cr.rotation.y=1.55*o,$e=Math.max($e,2)}for(let o of is){let a=Ge.position.x-o.c[0],l=Ge.position.z-o.c[1],c=Ge.position.y<3&&a*a+l*l<(o.tk?3.2*3.2:2.5*2.5);if(!c&&bt&&bt.doors.includes(o)&&a*a+l*l<5.5*5.5&&(c=!0),o.tk=c?1:0,Math.abs(o.tk-o.k)>.001){o.k+=Math.sign(o.tk-o.k)*Math.min(Math.abs(o.tk-o.k),t/(o.slide?1.1:1.4));let h=o.k*o.k*(3-2*o.k);o.slide?o.g.position.x=Rn(o.a,o.b,h):o.g.rotation.y=Rn(o.a,o.b,h),$e=Math.max($e,2)}}if(bt){let o=Math.min(1,Math.max(0,(e-bt.s)/bt.d));if(bt.curve){let a=Y_(o);bt.curve.getPointAt(a,Ge.position),bt.curve.getPointAt(Math.min(1,a+.09),sd),bt.curve.getPointAt(Math.min(1,a+.22),Zp),sd.add(Zp).multiplyScalar(.5),to.subVectors(sd,Ge.position),to.y=0,to.lengthSq()<1e-6&&to.subVectors(bt.t1,Ge.position),to.normalize(),sc.copy(Ge.position).addScaledVector(to,3),sc.y=Ge.position.y-.2,sc.lerp(bt.t0,1-jp(0,.3,a)).lerp(bt.t1,jp(.5,1,a)),Rt.target.lerp(sc,o>.985?1:1-Math.exp(-n*q_))}else{let a=Z_(o);Ge.position.lerpVectors(bt.p0,bt.p1,a),Rt.target.lerpVectors(bt.t0,bt.t1,a)}if(o>=1){let a=bt.done;bt=null,a&&a()}$e=Math.max($e,2)}{let o=!!(Si&&ei&&!bt&&!vc||wt.dof&&!fn.low);if(o){ti.uniforms.aperture.value=wt.dof?wt.dof.ap:.0018,ti.uniforms.maxblur.value=wt.dof?wt.dof.mb:.0042;let a=Ge.position.distanceTo(Rt.target),l=ti.uniforms.focus;ti.enabled?Math.abs(l.value-a)>.01&&(l.value+=(a-l.value)*Math.min(1,n*4),$e=Math.max($e,1)):l.value=a}o!==ti.enabled&&(ti.enabled=o,$e=Math.max($e,2))}let i=wt.on?0:(Ni.w||Ni.arrowup?1:0)-(Ni.s||Ni.arrowdown?1:0),s=wt.on?0:(Ni.d||Ni.arrowright?1:0)-(Ni.a||Ni.arrowleft?1:0);if(i||s){bt=null,yo();let o=eM.subVectors(Rt.target,Ge.position);o.y=0,o.normalize();let a=new A(-o.z,0,o.x),l=o.multiplyScalar(i*2.2*n).addScaledVector(a,s*2.2*n),c=Ge.position;c.y<3&&ic(c.x,c.z)&&!ic(c.x+l.x,c.z+l.z)&&(ic(c.x+l.x,c.z)?l.z=0:ic(c.x,c.z+l.z)?l.x=0:l.set(0,0,0)),Ge.position.add(l),Rt.target.add(l),$e=2}if(gn&&tr===null&&gn.a&&(tr={a:gn.a,b:gn.b,t:Rt.target.clone()}),gn&&tr){let o=Es.degToRad((gn.a-tr.a+540)%360-180),a=Es.degToRad(gn.b-tr.b)*.6,l=tr.t.clone().sub(Ge.position);l.applyAxisAngle(new A(0,1,0),o),l.y+=Math.tan(-a)*l.length()*.5,Rt.target.copy(Ge.position).add(l)}if($i){let o=!1;for(let a in ns){let l=ns[a]-zn[a];Math.abs(l)>.002?(zn[a]+=l*Math.min(1,n*(a==="curtain"?.75:1.8)*mc),o=!0):zn[a]=ns[a]}xo(zn),o||($i=!1,or=!0)}if(or&&!$i&&(or=z_(),$e=Math.max($e,2)),Rt.update(),Si&&!ss&&!bt){ud+=n*1e3;let o=ud,a=document.querySelector("#tProg b");a&&(a.style.width=Math.min(100,o/Qp*100)+"%"),o>Qp&&(ni===ir.length-1?(Hn.pv("/tour/complete"),wi(),he("info").classList.add("open")):hr(ni+1))}let r=!!bt||i||s||e-xc<140||$i;if(Q_(r),r||(fa=0),!r&&(pa||ad)&&e-xc>600&&(pa?(In=pa,pa=0,ot.setPixelRatio(In),wn.setPixelRatio(In),Ud()):(ad=!1,Rc(!1))),$e>0&&!cd){$e--,_a(!1);let o=fc(Ge.position);if(o!==pd){if(pd=o,Hn.zone(o),Rs&&!Si){let d=ri.find(g=>g.id===Rs).z;!(o==="overview"||d===o||["living","dining"].includes(d)&&["living","dining"].includes(o))&&!bt&&os()}document.querySelectorAll("#planSvg .rm").forEach(d=>d.classList.toggle("on",d.dataset.k===o)),he("planZone").textContent=Tt("sp."+o);let u=he("rn");u.style.opacity=0,setTimeout(()=>{u.textContent=Tt("sp."+o),u.style.opacity=1},200)}Ot.visible=Ge.position.y<=en-.05,si.forEach(u=>u.visible=!(Ge.position.y>3.2)),is.forEach(u=>{u.south&&(u.g.visible=!(Ge.position.y>3.2))}),cr.visible=Ge.position.y<=3.2,lr.day.concat(lr.night).forEach(u=>u.visible=Ge.position.y<3.2);let a=o==="living"||o==="dining"?["living","dining"]:[o];for(let u of ri){let d=a.includes(u.z)&&o!=="overview";d&&(no.copy(u.v3).project(Ge),d=no.z<1&&Math.abs(no.x)<1.05&&Math.abs(no.y)<1.05&&Ge.position.distanceTo(u.v3)<7.5&&!K_(u.v3),d&&(u.el.style.transform=`translate(${(no.x*.5+.5)*innerWidth}px,${(-no.y*.5+.5)*innerHeight}px)`)),u.el.classList.toggle("vis",d)}let l=document.getElementById("me");if(l){od.subVectors(Rt.target,Ge.position);let u=Math.atan2(od.z,od.x)*180/Math.PI;l.setAttribute("transform",`translate(${Ge.position.x.toFixed(2)} ${Ge.position.z.toFixed(2)}) rotate(${u.toFixed(1)})`)}ot.info.autoReset=!1,ot.info.reset(),wn.render(n);let c=ot.info.render.calls,h=ot.info.render.triangles;if(ot.info.autoReset=!0,ot.shadowMap.needsUpdate&&!$i&&(ot.shadowMap.needsUpdate=!1),tM++,oc&&e-oc<250&&io.push(e-oc),io.length>60&&io.shift(),oc=e,r&&fa&&e-fa<200&&(da.push(e-fa),da.length>50)){let u=da.reduce((d,f)=>d+f,0)/da.length;if(da.length=0,!nm){nm=!0;let d=1e3/u,f=d>=55?"55+":d>=45?"45-55":d>=30?"30-45":d>=20?"20-30":"under-20";Hn.pv("/perf/fps-"+f),Hn.pv("/perf/tier-"+(fn.low?"low":fn.mid?"mid":"high")+"-pr"+In)}u>19&&!window.__noAuto&&(In>1.01?pa=Math.max(1,In-.25):ei&&u>30&&(ad=!0))}if(fa=e,ro&&e-tm>300){tm=e;let u=io.length?io.reduce((d,f)=>d+f,0)/io.length:0;he("perf").textContent=`${u?(1e3/u).toFixed(0):"\u2013"} fps (rendering)   draw calls ${c}   tris ${(h/1e3).toFixed(0)}k
lights in shader: ${lo.point} point \xB7 ${lo.spot} spot \xB7 ${lo.rect} area (of ${ga.point.length}/${ga.spot.length}/${ga.rect.length})
pixel ratio ${In.toFixed(2)} \xB7 AO ${ei?"on":"off"} \xB7 tier ${fn.low?"low":"high"} \xB7 idle frames skip`}}if(jt){let o=jt.currentTime,a=sr?1:0;ho.city.gain.setTargetAtTime(a*.06*(1-.75*zn.curtain),o,.4),ho.air.gain.setTargetAtTime(a*.006,o,.4),ho.water.gain.setTargetAtTime(a*(e<Tm?.05:fc(Ge.position)==="bath"?.006:0),o,.5)}requestAnimationFrame(ma)}window.__suite={scene3:at,camera:Ge,go:Ac,dbg:()=>({bokeh:ti.enabled,ap:ti.uniforms.aperture.value,cine:wt.on,dof:!!wt.dof,intro:!!document.getElementById("intro"),gtao:ai.enabled}),doors:()=>is.map(n=>+n.k.toFixed(2)),look:(n,e)=>Is(n,e,.01),pbr:()=>({floor:v.floor.map&&v.floor.map.isCompressedTexture||v.floor.map?.isTexture&&!v.floor.map.isCanvasTexture}),scene:n=>{vo(n),Object.assign(zn,co[n]),xo(zn),$i=!1,or=!0},hs:n=>{Ca(n)},renderer:ot,setHQ:Rc,tour:()=>_c(!0),enter:()=>_c(!1),info:()=>({calls:ot.info.render.calls})};fn.low&&Rc(!1);Dd();vo("welcome");var md=location.hash.slice(1),nM=li[md]?md:"foyer";Ac(nM,.01);{let n=new Di(new Uint8Array([255,255,255,255]),1,1);n.needsUpdate=!0,n.colorSpace=hn;let e=new Di(new Uint8Array([255,255,255,255]),1,1);e.needsUpdate=!0,at.traverse(t=>{if(t.material)for(let i of[].concat(t.material))!i.isMeshStandardMaterial||i.userData.unified||(i.userData.unified=1,i.map||(i.map=n,i.needsUpdate=!0),i.roughnessMap||(i.roughnessMap=e,i.needsUpdate=!0))})}try{await ot.compileAsync(at,Ge)}catch{}ti.enabled=!0,wn.render(.016),ti.enabled=!1;await ci(100,"load.shader");ma();he("intro").classList.add("ready");var iM=n=>new Promise(e=>setTimeout(e,n));async function Am(){for(;bt||performance.now()-xc<400||$i;)await iM(150)}async function Rm(){cd=!0;try{await ot.compileAsync(at,Ge)}catch{}cd=!1,$e=Math.max($e,4)}async function sM(){let n=new Zr,e=ot.capabilities.getMaxAnisotropy(),t=(x,m)=>(x.wrapS=x.wrapT=Kn,x.colorSpace=m?hn:xi,x.anisotropy=e,x),i=(x,m)=>n.loadAsync("tex/"+x+".webp").then(p=>t(p,m)),s=i,o=!fn.low&&!fn.mid&&Math.max(screen.width,screen.height)*devicePixelRatio>=2400&&(navigator.deviceMemory||8)>=8?"":"_1k",[a,l,c,h,u,d,f]=await Promise.all([i("floor_diff"+o,1),i("floor_nor"+o),i("floor_rough"+o),s("walnut_veneer_albedo",1),s("walnut_veneer_normal"),s("walnut_veneer_roughness"),s("rough_linen_normal")]);await Am();for(let x of[a,l,c])x.repeat.copy(Re.floor.repeat);Object.assign(v.floor,{map:a,normalMap:l,roughnessMap:c,roughness:1}),v.floor.normalScale.set(.7,.7);for(let[x,m]of[[v.walnut,im.walnut],[v.ebony,im.ebony]])Object.assign(x,{map:h,normalMap:u,roughnessMap:d,roughness:.85}),x.color.setHex(m);f.repeat.copy(Re.fabricN.repeat),at.traverse(x=>{if(x.material)for(let m of[].concat(x.material))m.normalMap===Re.fabricN&&(m.normalMap=f,m.needsUpdate=!0)});for(let x of[v.floor,v.walnut,v.ebony])x.needsUpdate=!0;await Rm(),or=!0;let g=new Set;at.traverse(x=>{if(x.material)for(let m of[].concat(x.material))for(let p of["map","normalMap","roughnessMap"])m[p]&&g.add(m[p])});for(let x of["floor","floorN","floorR","fabricN"]){let m=Re[x];m&&m.isTexture&&!g.has(m)&&(m.dispose(),m.image=null)}}var im={walnut:10128e3,ebony:4867136},rM={x0:-9,x1:10,z0:-3,z1:7.2};async function oM(){let n=await new Zr().loadAsync("lm/floor_ao.webp");n.channel=1,n.colorSpace=xi,n.anisotropy=ot.capabilities.getMaxAnisotropy(),await Am(),at.updateMatrixWorld(!0);let e=new Set,t=new Map,i=new Jn;at.traverse(l=>{if(!l.isMesh)return;for(let h of[].concat(l.material))t.has(h)||t.set(h,[]),t.get(h).push(l);if(l.isInstancedMesh||l.userData.noAO)return;let c=l.geometry;c.boundingBox||c.computeBoundingBox(),i.copy(c.boundingBox).applyMatrix4(l.matrixWorld),i.max.y<.045&&i.min.y>-.02&&i.max.x-i.min.x>.3&&i.max.z-i.min.z>.3&&e.add(l)});let s=new Set,r=new A,o=rM,a=new Map;for(let l of e){s.has(l.geometry)&&(l.geometry=l.geometry.clone()),s.add(l.geometry);let c=l.geometry.attributes.position,h=new Float32Array(c.count*2);for(let d=0;d<c.count;d++)r.fromBufferAttribute(c,d).applyMatrix4(l.matrixWorld),h[d*2]=(r.x-o.x0)/(o.x1-o.x0),h[d*2+1]=(r.z-o.z0)/(o.z1-o.z0);l.geometry.setAttribute("uv1",new mn(h,2));let u=d=>{if(d.transparent)return d;let f=t.get(d).some(x=>!e.has(x)),g=d;if(f&&(a.has(d)||a.set(d,d.clone()),g=a.get(d)),g.aoMap=n,g.aoMapIntensity=1,!g.userData.aoDirect){g.userData.aoDirect=1;let x=g.onBeforeCompile;g.onBeforeCompile=(m,p)=>{x&&x.call(g,m,p),m.fragmentShader=m.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
	reflectedLight.directDiffuse *= mix( 1.0, ambientOcclusion, 0.8 );
	reflectedLight.directSpecular *= mix( 1.0, ambientOcclusion, 0.6 );`)},g.customProgramCacheKey=()=>"aoDirect"}return g.needsUpdate=!0,g};l.material=Array.isArray(l.material)?l.material.map(u):u(l.material)}await Rm(),or=!0}sM().catch(n=>console.warn("PBR textures not loaded",n)).finally(()=>oM().catch(n=>console.warn("baked AO not loaded",n)));var Cm=["signature","welcome","arrival","plan","city","timelapse"],As={p:[.9,1.56,2.55],t:[.55,1.12,-3]},mo=(()=>{let n=(o,a,l="")=>{let c=document.createElement("div");return c.id=o,a&&(c.className=a),c.innerHTML=l,document.body.appendChild(c),c},e=n("lbT"),t=n("lbB"),i=n("cineFade"),s=n("cineTitle","",'<div class="h"></div><div class="r"></div><div class="m"></div>'),r=document.createElement("button");return r.id="cineSkip",document.body.appendChild(r),r.addEventListener("click",()=>Nd()),{top:e,bot:t,fade:i,title:s,skip:r}})();function Pm(n=.3){let e=_m.mesh;e.updateMatrixWorld(!0);let t=e.getWorldPosition(new A),i=new A(0,0,1).applyQuaternion(e.getWorldQuaternion(new Ln)),s=t.clone().addScaledVector(i,n);return s.y+=.05,{p:s.toArray(),t:t.toArray()}}function ar(n){return n==="welcome"?Pm():n==="signature"||n==="arrival"?{p:[-2.1,1.62,9],t:[-2.1,1.45,6]}:n==="plan"?{p:[.6,16.5,3.3],t:[.6,0,2]}:n==="city"?{p:[1.5,1.55,-8.8],t:[1.5,1.5,-3]}:n==="timelapse"?{p:[2.9,1.56,2.55],t:[-.6,1.15,-2.7]}:null}function Fi(n,e){bt=null,Ge.position.set(...n),Rt.target.set(...e),Rt.update(),$e=Math.max($e,3)}function Im(n){let e=ar(n);e&&(wt.mode=n,Zt.visible=n==="signature"||n==="arrival",n==="city"?window.__suite.scene("evening"):n==="timelapse"?window.__suite.scene("turndown"):(zn.curtain=ns.curtain=1,xo(zn)),Fi(e.p,e.t))}function hc(n){if(!(!sr||!jt))try{let e=jt.currentTime,t=jt.createGain();if(t.connect(jt.destination),n==="beep"){for(let[a,l]of[[1760,0],[2350,.11]]){let c=jt.createOscillator();c.frequency.value=a;let h=jt.createGain();h.gain.setValueAtTime(0,e+l),h.gain.linearRampToValueAtTime(.05,e+l+.01),h.gain.linearRampToValueAtTime(0,e+l+.09),c.connect(h).connect(jt.destination),c.start(e+l),c.stop(e+l+.1)}return}let i=jt.createBufferSource();i.buffer=cc(n!=="latch");let s=jt.createBiquadFilter();s.type=n==="latch"?"highpass":"lowpass",s.frequency.value=n==="latch"?2200:n==="curtain"?900:500;let r=n==="latch"?.08:n==="curtain"?2.6:1.4,o=n==="latch"?.25:n==="curtain"?.06:.12;t.gain.setValueAtTime(0,e),t.gain.linearRampToValueAtTime(o,e+r*.25),t.gain.linearRampToValueAtTime(0,e+r),i.connect(s).connect(t),i.start(e),i.stop(e+r+.05)}catch{}}function va(n){let e=mo.title;e.querySelector(".h").textContent=Pn(gt.hotel),e.querySelector(".r").textContent=Pn(gt.room),e.querySelector(".m").textContent=n||Pn(gt.city)+" \xB7 "+gt.area+" \u33A1",e.classList.add("on"),setTimeout(()=>e.classList.remove("on"),4200)}var Oi=(n,e)=>new Promise((t,i)=>setTimeout(()=>e===wt.tok?t():i("skip"),n)),Qi=(n,e,t,i,s={})=>new Promise((r,o)=>Is(n,e,t,()=>i===wt.tok?r():o("skip"),0,{raw:!0,route:!1,...s}));async function aM(n,e,t){mo.fade.classList.add("on"),await Oi(420,t),Fi(n,e),await Oi(160,t),mo.fade.classList.remove("on")}function gd(){ns.curtain=0,$i=!0,hc("curtain")}async function sm(n){Zt.visible=!0,ln.k=ln.tk=0,cr.rotation.y=0,uc.mat.emissive.setHex(16722456);let e=ar("arrival");Fi(e.p,e.t),va();let t=Qi([-2.1,1.62,8],[-2.1,1.45,6],2.8,n);await Oi(1300,n),uc.mat.emissive.setHex(2883434),hc("beep"),$e=Math.max($e,2),await Oi(450,n),ln.tk=1,hc("latch"),setTimeout(()=>hc("door"),150),await t,await Oi(500,n),await Qi([-2,1.6,4.6],[-2.9,1.4,.2],4.8,n),ln.tk=0,setTimeout(()=>{ln.tk===0&&(Zt.visible=!1)},1900)}async function rm(n,e){let t=Pm();e?await aM(t.p,t.t,n):Fi(t.p,t.t),wt.dof={ap:.03,mb:.012},e||va(),await Oi(2200,n),wt.dof=null,gd(),await Qi(As.p,As.t,7,n)}var om={signature:async n=>{await sm(n),await rm(n,!0)},welcome:async n=>{await rm(n,!1)},arrival:async n=>{await sm(n),gd(),await Qi(As.p,As.t,5.5,n,{route:!0,mps:.8})},plan:async n=>{let e=ar("plan");Fi(e.p,e.t),va(),await Oi(1600,n),gd(),await Qi([.9,6.2,4.4],[.6,.6,.4],4.6,n),await Qi(As.p,As.t,4.8,n)},city:async n=>{let e=ar("city");Fi(e.p,e.t),va(),await Oi(1400,n),await Qi([1.5,1.55,-4.1],[1.5,1.5,0],5,n),await Qi([1.5,1.55,-1.5],[1.3,1.45,2.6],3,n),await Qi(li.living.p,li.living.t,5.2,n)},timelapse:async n=>{let e=ar("timelapse");Fi(e.p,e.t),va(Tt("op.tl")),await Oi(1800,n),mc=.36,vo("day"),await Oi(9e3,n),mc=1}};function xd(){let n=wt.mode;wt.on=!1,wt.dof=null,mc=1,Rt.enabled=!0,document.body.classList.remove("cine"),mo.title.classList.remove("on"),mo.fade.classList.remove("on"),(ln.tk!==0||ln.k!==0)&&(ln.tk=ln.k=0,cr.rotation.y=0),Zt.visible=!1,$e=Math.max($e,3);let e=!1;try{e=localStorage.getItem("suiteHint")==="1",localStorage.setItem("suiteHint","1"),localStorage.setItem("suiteOpened","1")}catch{}e||zi(Tt("ui.hintShort"),6e3)}function Nd(){if(!wt.on)return;wt.tok++,bt=null,Hn.pv("/opening/skip");let n=wt.mode;n==="city"?Fi(li.living.p,li.living.t):Fi(As.p,As.t),n==="timelapse"?window.__suite.scene("day"):n!=="city"&&(ns.curtain=0,zn.curtain=0,xo(zn)),xd()}async function Dm(n){if(!om[n]||gc)return;wt.on&&Nd(),wi(),os();let e=++wt.tok;wt.on=!0,wt.mode=n,Rt.enabled=!1,document.body.classList.add("cine"),mo.skip.textContent=Tt("ui.skip")+"  \u203A",Hn.pv("/opening/"+n),(!ar(n)||Ge.position.distanceTo(new A(...ar(n).p))>.05)&&Im(n);try{await om[n](e),e===wt.tok&&xd()}catch(t){t!=="skip"&&(console.warn(t),e===wt.tok&&xd())}}var yc=(()=>{if(gc)return"none";let n=new URLSearchParams(location.search).get("open");return n&&(Cm.includes(n)||n==="none")?n:li[md]?"none":"arrival"})();yc!=="none"&&Im(yc);{let n=document.createElement("div");n.id="mOpen",n.innerHTML='<div class="l" data-i="ui.opening"></div><div class="chips">'+Cm.map(e=>`<button data-o="${e}" data-i="op.${e}"></button>`).join("")+"</div>",he("menu").appendChild(n),n.querySelectorAll("button").forEach(e=>e.addEventListener("click",t=>{t.stopPropagation(),he("menu").classList.remove("open"),Dm(e.dataset.o)})),Dd()}function _c(n){if(Hn.start(n?"tour":"explore"),!he("intro")||he("intro").classList.contains("gone")){n&&dd();return}document.body.classList.remove("intro"),he("intro").classList.add("gone"),setTimeout(()=>he("intro").remove(),1e3),$e=4;let e=window.requestIdleCallback||(i=>setTimeout(i,400)),t=()=>{_d(!1)&&e(t)};if(setTimeout(()=>e(t),1500),n)Zt.visible=!1,pc!=="welcome"&&window.__suite.scene("welcome"),Fi(li.foyer.p,li.foyer.t),zn.curtain=ns.curtain=1,xo(zn),dd();else if(yc!=="none")Dm(wt.mode||yc);else{let i=!1;try{i=localStorage.getItem("suiteHint")==="1",localStorage.setItem("suiteHint","1")}catch{}i||zi(Tt("ui.hintShort"),6e3)}}async function lM(){if(oo)return;oo=!0;let n=ot.getContext(),e=[],t=he("perf");t.classList.add("on"),wi(),os(),bt=null,window.__suite.scene("evening"),_d(!0),oo=!1;for(let d=0;d<20;d++)await new Promise(f=>requestAnimationFrame(f));oo=!0;let i=li.living;Ge.position.set(...i.p),Rt.target.set(...i.t),Rt.update(),_a(!0);let s=()=>new Promise(d=>requestAnimationFrame(()=>d()));async function r(d,f,g=40){try{await ot.compileAsync(at,Ge)}catch{}for(let p=0;p<12;p++)f(),n.finish(),await s();let x=performance.now();for(let p=0;p<g;p++)f(),n.finish();let m=(performance.now()-x)/g;e.push(`${d.padEnd(34)} ${m.toFixed(1).padStart(6)} ms  ${(1e3/m).toFixed(0).padStart(4)} fps`),t.textContent=e.join(`
`),await s()}let o=()=>wn.render(.016),a=()=>ot.render(at,Ge),l=d=>{ot.setPixelRatio(d),wn.setPixelRatio(d),wn.setSize(innerWidth,innerHeight)},c=Math.min(devicePixelRatio,1.75);ai.enabled=!0,xa.enabled=!0,ts.enabled=!0,l(c),await r(`FULL  pr${c} AO+bloom+SMAA`,o),ai.enabled=!1,await r(`pr${c} no AO`,o),xa.enabled=!1,await r(`pr${c} no AO, no SMAA`,o),ts.enabled=!1,await r(`pr${c} composer, no post`,o),await r(`pr${c} plain render`,a),l(1),await r("pr1 plain render",a),Bn.rect.forEach(d=>d.visible=!1),await r("pr1 plain, no area lights",a),Bn.rect.forEach(d=>d.visible=!0),Bn.point.forEach(d=>d.visible=!1),await r("pr1 plain, no point lights",a),Bn.point.forEach(d=>d.visible=!0),Bn.rect.forEach(d=>d.visible=!1),Bn.spot.forEach(d=>d.visible=!1),await r("pr1 plain, no area/spot",a),Bn.point.forEach(d=>d.visible=!1),await r("pr1 plain, no area/spot/point",a);let h=[...lr.day,...lr.night];h.forEach(d=>d.visible=!1),await r("pr1 + no window views",a),at.environment=null,await r("pr1 + no env map",a);let u=ot.shadowMap.enabled;ot.shadowMap.enabled=!1,at.traverse(d=>{d.material&&(d.material.needsUpdate=!0)}),await r("pr1 + no shadows",a),e.push("",`GPU: ${(()=>{let d=n.getExtension("WEBGL_debug_renderer_info");return d?n.getParameter(d.UNMASKED_RENDERER_WEBGL):"?"})()}  dpr ${devicePixelRatio}  ${innerWidth}x${innerHeight}`),t.textContent=e.join(`
`),console.log(`[BENCH]
`+e.join(`
`)),ot.shadowMap.enabled=u,at.traverse(d=>{d.material&&(d.material.needsUpdate=!0)}),at.environment=er.living||vd,h.forEach(d=>d.visible=!0),Bn.rect.concat(Bn.spot,Bn.point).forEach(d=>d.visible=!0),ai.enabled=ei,xa.enabled=!0,l(In),ot.shadowMap.needsUpdate=!0,$e=4,oo=!1}window.__suite.bench=lM;try{document.fonts&&Promise.all(['26px "Pretendard Variable"','22px "Cormorant Garamond"'].map(n=>document.fonts.load(n,Tt("ui.welcome")+gt.guest+Pn(gt.hotel)).catch(()=>{}))).then(()=>document.fonts.ready).then(()=>{rr.map?.dispose(),rr.map=ym([Tt("ui.welcome"),gt.guest,Pn(gt.hotel)]),rr.needsUpdate=!0,$e=2})}catch{}Mc.addEventListener("webglcontextlost",n=>{n.preventDefault(),zi(Cn==="ko"?"\uADF8\uB798\uD53D \uBA54\uBAA8\uB9AC\uAC00 \uBD80\uC871\uD574 \uD654\uBA74\uC744 \uB2E4\uC2DC \uBD88\uB7EC\uC640\uC57C \uD569\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.":"Graphics were reset by the browser. Please reload the page.",1e4)});he("introTour").addEventListener("click",()=>_c(!0));he("introFree").addEventListener("click",()=>_c(!1));
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
