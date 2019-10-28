
const srart_pos1 = 90.75;
const item_count1 = 5;

var pos1 = [];
var elem1 = document.getElementsByClassName('item1');
function allocationItems1() {
	var i;
	var tt = elem1[0].getElementsByTagName('a')[0].getAttribute('data-tit'); 
	var desc = elem1[0].getElementsByTagName('a')[0].getAttribute('data-desc'); 
	$("#pic1 h2").text(tt);
	$("#pic1 p").text(desc);
	pos1[0] = srart_pos1;
	for (i = 1; i < item_count1; i++) {
		pos1[i] = pos1[i - 1] - 0.49;
		last_pos1=pos1[i];
	}
	for (i = 0; i < item_count1+1; i++) {
		elem1[i].style.right = 360 + 300 * Math.sin(pos1[i]) + 'px';
		elem1[i].style.top = 240 + 360 * Math.cos(pos1[i]) + 'px';
	}
}  

allocationItems1();

function animation1(args, flag1) { // некоторые аргументы определим на будущее
	var $ = {
        radius1: 360, // радиус окружности 
        speed: 10 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
    };
    var e1 = elem1;
    function animate1(draw, duration, callback) {
    	var start1 = performance.now();
    	requestAnimationFrame(function animate1(time) {
            // определить, сколько прошло времени с начала анимации
            var timePassed = time - start1;
            // возможно небольшое превышение времени, в этом случае зафиксировать конец
            if (timePassed > duration)
            	timePassed = duration;
            // нарисовать состояние анимации в момент timePassed
            draw(timePassed);
            // если время анимации не закончилось - запланировать ещё кадр
            if (timePassed < duration) {
            	requestAnimationFrame(animate1);
            } else callback();
        });
    }
    animate1(function (timePassed) {
    	var i;
    	for (i = 0; i < item_count1; i++) {
    		e1[i].style.right = 300 + $.radius1 * Math.sin(pos1[i]) + 'px';
    		e1[i].style.top = 240 + $.radius1 * Math.cos(pos1[i]) + 'px';
    		if (flag1) {
    			pos1[i] += s; 
    		} else {
    			pos1[i] -= s; 
    		}
    	}   /* callback function */
    }, 400, function changeItems() {
    	var list1 = document.getElementById('list1');
    	var ch1 = flag1 ? list1.firstElementChild : list1.lastElementChild
    	ch1.remove();
    	if (flag1) {
    		list1.appendChild(ch1);
    	} else {
    		list1.insertBefore(ch1, list1.firstChild);
    	}
    	allocationItems1();
    });
}