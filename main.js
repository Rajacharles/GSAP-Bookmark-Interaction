var btn = document.querySelector('button');
var tl = new TimelineMax({paused: true});

tl.to('.icon._2', .8, {
	transform : "rotateX(0deg)",
	ease: Bounce.easeOut
});

btn.addEventListener('click', () => {
	tl.reversed(!tl.reversed());
	if(tl.reversed()){
		tl.reverse();
	}else{
		tl.play();
	}
});