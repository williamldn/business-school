"use strict";
class DiagGenerator {
	constructor(parent, child) {
		this.DOMParent = document.querySelector(parent);
		this.DOMChild = document.querySelector(child);
		this._config = {
			perWidth : 100,
			perHeight : 100,
			overflow : "hidden",
			color : "rgba(0,0,0,.5)",
			flipY : false,
			skew : {
				isSkew : false,
				beta : false,
				diagObj : this,
			},
			top : 0,
			left : 0,
			bottom : null,
			right : null,
			flipX : false,
			origin : null,
			translate : null}
	}

	get width() {
		return this.DOMParent.offsetWidth * this._config.perWidth / 100;}

	get height() {
		return this.DOMParent.offsetHeight * this._config.perHeight / 100;}

	set config(op) {
		for (let value in op) {
			this._config[value] = op[value];
		}}

	get flipY() {
		if (this._config.flipY) {return `0 ${this.width}px ${this.height}px 0`;}
		return `${this.height}px ${this.width}px 0 0`;}

	get diagDirColor() {
		if (this._config.flipY) {return `transparent transparent ${this._config.color}`;}
		return `${this._config.color} transparent transparent`;}

	get flipX() {
		if (this._config.flipX) {return 'scaleX(-1)';}
		return '';}

	get skew() {
		if (this._config.skew.isSkew) {
			console.log('dentro de skew', this._config.skew.isSkew)
			if (!this._config.skew.beta) {return ` skewX(-${angleLine(this._config.skew.diagObj, true)}deg)`;}
			else {return ` skewX(-${90 - angleLine(this._config.skew.diagObj)}deg)`;}
		}
		return '';}

	get translate() {
		if (this._config.translate != null) {
			let out = '';
			if (this._config.translate.includes('end')) {out += ` translateX(${this.DOMParent.offsetWidth - 1}px)`}
			if(this._config.translate.includes('bottom')) {out += ` translateY(${this.DOMParent.offsetHeight - this.height}px)`}
			return out;
		}
		return '';}

	creator() {
		this.DOMChild.style.borderStyle = 'solid';
		this.DOMChild.style.position = 'absolute';
		this.DOMChild.style.top = this._config.top;
		this.DOMChild.style.bottom = this._config.bottom;
		this.DOMChild.style.left = this._config.left;
		this.DOMChild.style.right = this._config.right;
		this.DOMChild.style.borderColor = this.diagDirColor;
		this.DOMChild.style.borderWidth = this.flipY;
		this.DOMChild.style.transformOrigin = this._config.origin; 
		this.DOMChild.style.transform = this.flipX + this.skew + this.translate;
		this.DOMParent.style.overflow = this._config.overflow;}
}

function angleLine (diagObj, beta = false) {
	if (beta) {console.log('dentro del if de angleline'); return Math.atan(diagObj.width / diagObj.height) * 180 / Math.PI;}
	else {return Math.atan(diagObj.height / diagObj.width) * 180 / Math.PI;}
}

	

/*
*	diag intro 
*/

const introDiag = new DiagGenerator('.intro .hero-body', '.intro .diag');
introDiag.config = {
	perWidth: 85,
	perHeight: 100, 
	color: "rgba(73,39,38,.94)", 
	overflow : null};
introDiag.creator();

window.addEventListener('resize', introDiag.creator.bind(introDiag));

const introDiagLine = new DiagGenerator('.intro .diag', '.intro .diag-line');
introDiagLine.config = {
	perWidth : 5,
	perHeight : 105,
	flipY : true,
	color: "#9c6664",
	left : "0px",
	skew : {
		isSkew : true,
		diagObj : introDiag,
	},
	origin : '0 0',
	translate: 'end',
	overflow : null,
}
introDiagLine.creator();
window.addEventListener('resize', introDiagLine.creator.bind(introDiagLine));

const introDiag2 = new DiagGenerator('.intro .hero-body', '.intro .diag2');
introDiag2.config = {
	top : null,
	bottom : 0,
	perWidth: 15, 
	perHeight: 15, 
	color: "white",
	flipX: true,
	flipY: true, 
	overflow : null};
introDiag2.creator();

window.addEventListener('resize', introDiag2.creator.bind(introDiag2));

const introDiagSquare = new DiagGenerator('.intro .hero-body', '.intro .square1-2');
introDiagSquare.config = {
	top : null,
	left : '14.6vw',
	bottom : 0,
	perWidth: 86.5, 
	perHeight: 15, 
	color: "white",
	flipX: true,
	flipY: true, 
	overflow : null};
introDiagSquare.creator();

window.addEventListener('resize', introDiagSquare.creator.bind(introDiagSquare));

const introDiagSquare2 = new DiagGenerator('.intro .hero-body', '.intro .square2-2');
introDiagSquare2.config = {
	top : null,
	left : '14.6vw',
	bottom : "-0.5px",
	perWidth: 86.5, 
	perHeight: 15, 
	color: "white",
	overflow : null};
introDiagSquare2.creator();

window.addEventListener('resize', introDiagSquare2.creator.bind(introDiagSquare2));

/*
*	DIAG PROGRAM
*/
const progDiag = new DiagGenerator('.programs', '.programs .diag');
progDiag.config = {
	perWidth: 65,
	perHeight: 114,
	color: 'white',
}
progDiag.creator();

const progDiagLine = new DiagGenerator('.programs .diag', '.programs .diag-line');
progDiagLine.config = {
	perWidth : 5,
	perHeight : 105,
	flipY : true,
	color: "#9c6664",
	left : "0px",
	skew : {
		isSkew : true,
		diagObj : progDiag,
	},
	origin : '0 0',
	translate: 'end',
	overflow : null,
}
progDiagLine.creator();

const contDiag = new DiagGenerator('.contact', '.contact .diag');
contDiag.config = {
	perWidth: 80,
	perHeight: 160,
	left : null,
	right : '0px',
	top: null,
	bottom : '0px',
	color: 'white',
	flipY: true,
	flipX: true,
	origin: 'top center',
	overflow : null,
}


const contDiagLine = new DiagGenerator('.contact', '.contact .diag-line');
contDiagLine.config = {
	perWidth : 3,
	perHeight : 160,
	flipY : true,
	color: "#9c6664",
	left : '0px',
	top : null,
	bottom : 0,
	skew : {
		isSkew : true,
		diagObj : contDiag,
		beta : true,
	},
	origin : "top right",
	translate: "end"
}


/*
*	VIDEO TRIANGLES
*/
const videoTriangle1 = new DiagGenerator('.video>div', '.video-triangle1');
videoTriangle1.config = {
	perWidth: 90,
	perHeight: 50,
	top:"-1.3rem",
	right:"0px",
	left: null,
	color: "rgba(73,39,38,1)",
	overflow : null,
	origin: "center right",
	
}

const videoTriangle2 = new DiagGenerator('.video>div', '.video-triangle2');
videoTriangle2.config = {
	top:"1.1rem",
	left: null,
	right: "-1.2rem",
	color: "rgba(73,39,38,1)",
	overflow : null,
	origin: "center center",
	flipX: true,
	flipY: true,
	
}


document.addEventListener("DOMContentLoaded", () => {
	contDiag.creator();
	contDiagLine.creator();
	videoTriangle1.creator();
	videoTriangle2.creator();
});

window.addEventListener('resize', () => {
	progDiag.creator();
	progDiagLine.creator();
	contDiag.creator();
	contDiagLine.creator();
	videoTriangle1.creator();
	videoTriangle2.creator();
});


/*
*	MENU RESPONSIVO
*/

function toggleMenu()
const toggleHidden = function() {
  const attr = this.attributes;
  const target = document.getElementById(attr['data-target'].value);
  const overlay = document.getElementsByClassName(attr['aria-label'].value)[0];
  
  if (attr['aria-expanded'].value == "true") {
  	target.style.display = "block";
    this.setAttribute("aria-expanded", "false");
    overlay.classList +=' overlay-animation'
  } else {
  	target.style.display = "none";
    this.setAttribute("aria-expanded", "true");
    overlay.classList.remove('overlay-animation');
  }
}



const menuBar = document.querySelector('.burger');
menuBar.addEventListener('click', toggleHidden);

