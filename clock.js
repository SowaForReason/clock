 setInterval(() => {
    d=new Date();
    htime =d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hours.style.transform=`rotate(${htime}deg)`;
    minute.style.transform=`rotate(${mtime}deg)`;
    second.style.transform=`rotate(${stime}deg)`;
}, 1000);