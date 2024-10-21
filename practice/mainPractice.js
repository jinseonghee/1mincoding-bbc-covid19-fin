//전역변수 사용을 회피하기 위해서 즉시실행 익명 함수(함수이름이 없음)를 만듦
(() => {


	// let yOffset = 0; // window.pageYOffset 대신 쓸 변수
	// let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
	// let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
	// let enterNewScene = false; // 새로운 scene이 시작된 순간 true
	// let acc = 0.2;
	// let delayedYOffset = 0;
	// let rafId;
	// let rafState;

    function checkMenu() { 
        
		if (yOffset > 44) {
            console.log('fkfkfk',yOffset)
			document.body.classList.add('local-nav-sticky');
		} else {
			document.body.classList.remove('local-nav-sticky');
		}
	}


    const actions = {
        birdFlies(key) { //메서드
            if(key) {
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
            } else {
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
            }
        },
        birdFlies2(key) {
            if(key) {
                document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`; //-부호를 붙여야 위쪽으로 올라감
            } else {
                document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
            }
            
        }
    }


    //canvas setting
    // const sceneInfo = [
        
    //     {
	// 		// 3
	// 		type: 'sticky',
	// 		heightNum: 5,
	// 		scrollHeight: 0,
	// 		objs: {
	// 			container: document.querySelector('#scroll-section-3'),
	// 			canvasCaption: document.querySelector('.canvas-caption'),
	// 			canvas: document.querySelector('.image-blend-canvas'),
	// 			context: document.querySelector('.image-blend-canvas').getContext('2d'),
	// 			imagesPath: [
	// 				'../images/blend-image-1.jpg',
	// 				'../images/blend-image-2.jpg'
	// 			],
	// 			images: []
	// 		},
	// 		values: {
	// 			rect1X: [ 0, 0, { start: 0, end: 0 } ],
	// 			rect2X: [ 0, 0, { start: 0, end: 0 } ],
	// 			blendHeight: [ 0, 0, { start: 0, end: 0 } ],
	// 			canvas_scale: [ 0, 0, { start: 0, end: 0 } ],
	// 			canvasCaption_opacity: [ 0, 1, { start: 0, end: 0 } ],
	// 			canvasCaption_translateY: [ 20, 0, { start: 0, end: 0 } ],
	// 			rectStartY: 0
	// 		}
	// 	}
    
    // ]

    // console.log("333",sceneInfo[0])

    // function setCanvasImages() {
    //     let imgElem3;
	// 	for (let i = 0; i < sceneInfo[0].objs.imagesPath.length; i++) {
	// 		console.log("image-blend-canvas11", imgElem3)
	// 		imgElem3 = new Image();
	// 		imgElem3.src = sceneInfo[0].objs.imagesPath[i];
	// 		sceneInfo[0].objs.images.push(imgElem3);
	// 	}

    // }


	// function setLayout() {
	// 	// 각 스크롤 섹션의 높이 세팅
	// 	for (let i = 0; i < sceneInfo.length; i++) {
	// 		if (sceneInfo[i].type === 'sticky') {
	// 			sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
	// 		} else if (sceneInfo[i].type === 'normal')  {
	// 			sceneInfo[i].scrollHeight = sceneInfo[i].objs.content.offsetHeight + window.innerHeight * 0.5;
	// 		}
    //         sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
	// 	}

	// 	yOffset = window.pageYOffset;

	// 	let totalScrollHeight = 0;
	// 	for (let i = 0; i < sceneInfo.length; i++) {
	// 		totalScrollHeight += sceneInfo[i].scrollHeight;
	// 		if (totalScrollHeight >= yOffset) {
	// 			currentScene = i;
	// 			break;
	// 		}
	// 	}
	// 	document.body.setAttribute('id', `show-scene-${currentScene}`);

	// 	const heightRatio = window.innerHeight / 1080;
	// 	sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
	// 	//sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
	// }



	// function calcValues(values, currentYOffset) {
    //     console.log("values",values)
	// 	let rv;
	// 	// 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
	// 	const scrollHeight = sceneInfo[currentScene].scrollHeight;
	// 	const scrollRatio = currentYOffset / scrollHeight;

	// 	if (values.length === 3) {
	// 		// start ~ end 사이에 애니메이션 실행
	// 		const partScrollStart = values[2].start * scrollHeight;
	// 		const partScrollEnd = values[2].end * scrollHeight;
	// 		const partScrollHeight = partScrollEnd - partScrollStart;

	// 		if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
	// 			rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
	// 		} else if (currentYOffset < partScrollStart) {
	// 			rv = values[0];
	// 		} else if (currentYOffset > partScrollEnd) {
	// 			rv = values[1];
	// 		}
	// 	} else {
	// 		rv = scrollRatio * (values[1] - values[0]) + values[0];
	// 	}

	// 	return rv;
	// }

    // function playAnimation() {
    //     const objs = sceneInfo[currentScene].objs;
	// 	const values = sceneInfo[currentScene].values;
	// 	const currentYOffset = yOffset - prevScrollHeight;
	// 	const scrollHeight = sceneInfo[currentScene].scrollHeight;
	// 	const scrollRatio = currentYOffset / scrollHeight;
    //     console.log("fffkfk",currentScene)
    //     console.log("fffkfk111",scrollRatio)

	// 		if (scrollRatio > 1.7) {
    //             // const objs = sceneInfo[0].objs;
    //             // const values = sceneInfo[0].values;
    //             // const widthRatio = window.innerWidth / objs.canvas.width;
    //             // const heightRatio = window.innerHeight / objs.canvas.height;
    //             // let canvasScaleRatio;

    //             // if (widthRatio <= heightRatio) {
    //             //     // 캔버스보다 브라우저 창이 홀쭉한 경우
    //             //     canvasScaleRatio = heightRatio;
    //             // } else {
    //             //     // 캔버스보다 브라우저 창이 납작한 경우
    //             //     canvasScaleRatio = widthRatio;
    //             // }

    //             // objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
    //             // objs.context.fillStyle = 'white';
    //             // objs.context.drawImage(objs.images[0], 0, 0);

    //             // // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
    //             // const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
    //             // const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

    //             // const whiteRectWidth = recalculatedInnerWidth * 0.15;
    //             // values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
    //             // values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
    //             // values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
    //             // values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

    //             // // 좌우 흰색 박스 그리기
    //             // objs.context.fillRect(
    //             //     parseInt(values.rect1X[0]),
    //             //     0,
    //             //     parseInt(whiteRectWidth),
    //             //     objs.canvas.height
    //             // );
    //             // objs.context.fillRect(
    //             //     parseInt(values.rect2X[0]),
    //             //     0,
    //             //     parseInt(whiteRectWidth),
    //             //     objs.canvas.height
    //             // );
    //         }



    //         let step = 0;
	// 			// 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
	// 			const widthRatio = window.innerWidth / objs.canvas.width;
	// 			const heightRatio = window.innerHeight / objs.canvas.height;
	// 			let canvasScaleRatio;

	// 			if (widthRatio <= heightRatio) {
	// 				// 캔버스보다 브라우저 창이 홀쭉한 경우
	// 				canvasScaleRatio = heightRatio;
	// 			} else {
	// 				// 캔버스보다 브라우저 창이 납작한 경우
	// 				canvasScaleRatio = widthRatio;
	// 			}

	// 			objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
	// 			objs.context.fillStyle = 'white';
	// 			objs.context.drawImage(objs.images[0], 0, 0);

	// 			// 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
	// 			const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
	// 			const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

	// 			if (!values.rectStartY) {
	// 				// values.rectStartY = objs.canvas.getBoundingClientRect().top;
	// 				values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
	// 				values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
	// 				values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
	// 				values.rect1X[2].end = values.rectStartY / scrollHeight;
	// 				values.rect2X[2].end = values.rectStartY / scrollHeight;
	// 			}

	// 			const whiteRectWidth = recalculatedInnerWidth * 0.15;
	// 			values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
	// 			values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
	// 			values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
	// 			values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

	// 			// 좌우 흰색 박스 그리기
	// 			objs.context.fillRect(
	// 				parseInt(calcValues(values.rect1X, currentYOffset)),
	// 				0,
	// 				parseInt(whiteRectWidth),
	// 				objs.canvas.height
	// 			);
	// 			objs.context.fillRect(
	// 				parseInt(calcValues(values.rect2X, currentYOffset)),
	// 				0,
	// 				parseInt(whiteRectWidth),
	// 				objs.canvas.height
	// 			);

	// 			if (scrollRatio < values.rect1X[2].end) {
	// 				step = 1;
	// 				 console.log('캔버스 닿기 전');
	// 			    objs.canvas.classList.remove('sticky');
	// 			} else {
	// 				step = 2;
	// 				 console.log('캔버스 닿은 후');
	// 				// 이미지 블렌드
	// 				// values.blendHeight: [ 0, 0, { start: 0, end: 0 } ]
	// 				values.blendHeight[0] = 0;
	// 				values.blendHeight[1] = objs.canvas.height;
	// 				values.blendHeight[2].start = values.rect1X[2].end;
	// 				values.blendHeight[2].end = values.blendHeight[2].start + 0.2;
	// 				const blendHeight = calcValues(values.blendHeight, currentYOffset);

	// 				objs.context.drawImage(objs.images[1],
	// 					0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight,
	// 					0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight
	// 				);

	// 				objs.canvas.classList.add('sticky');
	// 				objs.canvas.style.top = `${-(objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2}px`;

	// 				if (scrollRatio > values.blendHeight[2].end) {
	// 					values.canvas_scale[0] = canvasScaleRatio;
	// 					values.canvas_scale[1] = document.body.offsetWidth / (1.5 * objs.canvas.width);
	// 					values.canvas_scale[2].start = values.blendHeight[2].end;
	// 					values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;

	// 					objs.canvas.style.transform = `scale(${calcValues(values.canvas_scale, currentYOffset)})`;
	// 					objs.canvas.style.marginTop = 0;
	// 				}

	// 				if (scrollRatio > values.canvas_scale[2].end
	// 					&& values.canvas_scale[2].end > 0) {
	// 					objs.canvas.classList.remove('sticky');
	// 					objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

	// 					values.canvasCaption_opacity[2].start = values.canvas_scale[2].end;
	// 					values.canvasCaption_opacity[2].end = values.canvasCaption_opacity[2].start + 0.1;
	// 					values.canvasCaption_translateY[2].start = values.canvasCaption_opacity[2].start;
	// 					values.canvasCaption_translateY[2].end = values.canvasCaption_opacity[2].end;
	// 					objs.canvasCaption.style.opacity = calcValues(values.canvasCaption_opacity, currentYOffset);
	// 					objs.canvasCaption.style.transform = `translate3d(0, ${calcValues(values.canvasCaption_translateY, currentYOffset)}%, 0)`;
	// 				} else {
	// 					objs.canvasCaption.style.opacity = values.canvasCaption_opacity[0];
	// 				}
	// 			}
                
        
    // }

    // function scrollLoop() {
	// 	enterNewScene = false;
	// 	prevScrollHeight = 0;

	// 	for (let i = 0; i < currentScene; i++) {
	// 		prevScrollHeight += sceneInfo[i].scrollHeight;
	// 	}

	// 	if (delayedYOffset < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
	// 		document.body.classList.remove('scroll-effect-end');
	// 	}

	// 	if (delayedYOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
	// 		enterNewScene = true;
	// 		if (currentScene === sceneInfo.length - 1) {
	// 			document.body.classList.add('scroll-effect-end');
	// 		}
	// 		if (currentScene < sceneInfo.length - 1) {
	// 			currentScene++;
	// 		}
	// 		document.body.setAttribute('id', `show-scene-${currentScene}`);
	// 	}

	// 	if (delayedYOffset < prevScrollHeight) {
	// 		enterNewScene = true;
	// 		// 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
	// 		if (currentScene === 0) return;
	// 		currentScene--;
	// 		document.body.setAttribute('id', `show-scene-${currentScene}`);
	// 	}

	// 	if (enterNewScene) return;

	// 	playAnimation();
	// }

    // function loop() {
	// 	delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;

	// 	if (!enterNewScene) {
	// 		if (currentScene === 0 || currentScene === 2) {
	// 			const currentYOffset = delayedYOffset - prevScrollHeight;
	// 			const objs = sceneInfo[currentScene].objs;
	// 			const values = sceneInfo[currentScene].values;
	// 			// let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
	// 			// if (objs.videoImages[sequence]) {
	// 			// 	objs.context.drawImage(objs.videoImages[sequence], 0, 0);
	// 			// }
	// 		}
	// 	}

    //     // 일부 기기에서 페이지 끝으로 고속 이동하면 body id가 제대로 인식 안되는 경우를 해결
    //     // 페이지 맨 위로 갈 경우: scrollLoop와 첫 scene의 기본 캔버스 그리기 수행
    //     if (delayedYOffset < 1) {
    //         scrollLoop();
    //         //sceneInfo[0].objs.canvas.style.opacity = 1;
    //         //sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
    //     }
    //     // 페이지 맨 아래로 갈 경우: 마지막 섹션은 스크롤 계산으로 위치 및 크기를 결정해야할 요소들이 많아서 1픽셀을 움직여주는 것으로 해결
    //     if ((document.body.offsetHeight - window.innerHeight) - delayedYOffset < 1) {
    //         let tempYOffset = yOffset;
    //         scrollTo(0, tempYOffset - 1);
    //     }

	// 	rafId = requestAnimationFrame(loop);

	// 	if (Math.abs(yOffset - delayedYOffset) < 1) {
	// 		cancelAnimationFrame(rafId);
	// 		rafState = false;
	// 	}
	// }

    //canvas setting end



    //이 안에서 실행하면 전역변수가 아닌 지역 변수이기 떄문에 함수 밖에서 실행 불가능
    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; // 현재 활성화된 (visible 클래스가 붙은) .graphic-item을 지정
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1; //IntersectionObserver에 의해 체크된 index가 ioIndex로 들어감
        //*1하면 문자로 된 걸 숫자로 바꾸는 가장 쉬운 방법이다(console에 검은색으로 나오면 문자, 파란색이 숫자임)

    });//intersection observer 어떤 요소가 눈에 보이는지 안보이는지를 체크 할 수 있음,
    //이 생성자 안엔 콜백 함수가 들어라고 매개변수를 두개 받는다.

    for(let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        //stepElems[i].setAttribute('data-index', i); step 클래스네임 안에 data-index를 만들어 숫자를 차례로 넣어주기 위함
        stepElems[i].dataset.index = i; // data- 속성에 dataset이라는 객체가 미리 만들어 져 있어서 가져다 사용하면 됨.(datasat이 자동으로 data-을 만들어주고 그 뒤에 짓고 싶은 이름을 붙이면 됨)
        graphicElems[i].dataset.index = i; 
    }
    
    function activate(action) {
        currentItem.classList.add('visible');
        if(action) {
            actions[action](true); //객체의 메서드를 호출 할 때 .을 이용해서 호출 할 수 있지만 이런 형태도 가능
        }
    }

    function inactivate(action) {
        currentItem.classList.remove('visible');
        if(action) {
            actions[action](false); //객체의 메서드를 호출 할 때 .을 이용해서 호출 할 수 있지만 이런 형태도 가능
        }
    }

    window.addEventListener('scroll' , () => {
        let step;
        let boudingRect;
        yOffset = window.pageYOffset;

        //scrollLoop();
        checkMenu();

        // if (!rafState) {
        //     rafId = requestAnimationFrame(loop);
        //     rafState = true;
        // }


        //for(let i =0; i < stepElems.length; i++) {
            for(let i = ioIndex - 1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            if(!step) continue;
            boudingRect = step.getBoundingClientRect();

            //높이를 100%라고 했을때 10% ~ 80% 까지 범위 안에 들어오면 img출력
            if(boudingRect.top > window.innerHeight * 0.1 && boudingRect.top < window.innerHeight * 0.8) {
                //graphicElems[step.dataset.index].classList.add('visible'); //visible class를 붙일 graphic-item이 됨 

                inactivate(currentItem.dataset.action);
                currentItem = graphicElems[step.dataset.index];
                activate(currentItem.dataset.action);

            }
        }
        playAnimation();
    });

    window.addEventListener('load', () => { //새로 고침 할 시 다시 처음 부터 시작 되도록
        setLayout();
        setTimeout(() => scrollTo(0,0), 100);
        
    }) //addEventListener에 false를 둬서 버블링 처리라는 option을 넣어주는데 원래는, 보통 생략을 한다.
    //setCanvasImages();
    activate();
})();

