document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.complete-btn');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');
    const btn4 = document.getElementById('btn-4');
    const btn5 = document.getElementById('btn-5');
    const btn6 = document.getElementById('btn-6');
    const btn7 = document.getElementById('btn-7');
    const activityLog = document.querySelectorAll('.activityLog');

    const calendar = new Date();
    const currentDate = calendar.toLocaleDateString('en-US', {
        weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'
    });
    document.getElementById('calendar').textContent = `${currentDate}`;


    for (const btn of buttons) {
        btn.addEventListener('click', function () {
            const textAssigned = document.getElementById('text-assigned').innerText;
            const convertedTextAssigned = parseInt(textAssigned);
            const completedTask = document.getElementById('completedTask').innerText;
            const convertedCompletedTask = parseInt(completedTask);
            const date = new Date();
            const time = date.toLocaleTimeString();

            if (btn == btn1) {
                alert("Board Updated Succesfully");
                const activity1 = document.getElementById('activity1');
                activity1.innerText = `You have completed the task Fix Mobile Button Issue at ${time}`;
                activity1.classList.remove('hidden');
                btn1.style.backgroundColor = "#a0aec0"
                btn1.disabled =true;
            }
            if (btn == btn2) {
                alert("Board Updated Succesfully");
                const activity2 = document.getElementById('activity2');
                activity2.innerText = `You have completed the task Add Dark Mode at ${time}`;
                activity2.classList.remove('hidden');
                btn2.style.backgroundColor = "#a0aec0"
                btn2.disabled =true;
            }
            if (btn == btn3) {
                alert("Board Updated Succesfully");
                const activity3 = document.getElementById('activity3');
                activity3.innerText = `You have completed the task Optimize Home Page at ${time}`;
                activity3.classList.remove('hidden');
                btn3.style.backgroundColor = "#a0aec0"
                btn3.disabled =true;
            }
            if (btn == btn4) {
                alert("Board Updated Succesfully");
                const activity4 = document.getElementById('activity4');
                activity4.innerText = `You have completed the task Add New Emoji at ${time}`;
                activity4.classList.remove('hidden');
                btn4.style.backgroundColor = "#a0aec0"
                btn4.disabled =true;
            }
            if (btn == btn5) {
                alert("Board Updated Succesfully");
                const activity5 = document.getElementById('activity5');
                activity5.innerText = `You have completed the task Integrate OpenAI API at ${time}`;
                activity5.classList.remove('hidden');
                btn5.style.backgroundColor = "#a0aec0"
                btn5.disabled =true;
            }
            if (btn == btn6) {
                alert("Board Updated Succesfully");
                const activity6 = document.getElementById('activity6');
                activity6.innerText = `You have completed the task Improve Job Searching at ${time}`;
                activity6.classList.remove('hidden');
                btn6.style.backgroundColor = "#a0aec0"
                btn6.disabled =true;
            }

            if (convertedTextAssigned == 1) {
                alert("Congratulations!!! You have completed all the tasks");
            }

            if (convertedTextAssigned > 0) {
                const remaining = convertedTextAssigned - 1;
                const completed = convertedCompletedTask + 1;
                document.getElementById('text-assigned').innerText = remaining;
                document.getElementById('completedTask').innerText = completed;
            }
        });
    }


    btn7.addEventListener('click', function () {
        for (const activity of activityLog) {
            if (activity.innerText !== '') {
                activity.innerText = '';
                activity.classList.add('hidden');
            }
        }
    });

    document.getElementById("discover-btn").addEventListener('click', function () {
        window.location.href = "./discover.html";
    });

   
    document.getElementById("color-change-btn").addEventListener('click',function(){
        const htmlElement = document.getElementsByTagName('html')[0];
        const colors =["bg-red-500", "bg-green-500", "bg-blue-500", "bg-amber-500", "bg-zinc-900","bg-purple-500","bg-gray-500"]
        for(let i=0; i<colors.length;i++){
            if(htmlElement.classList.contains(colors[i])){
                htmlElement.classList.remove(colors[i])
                const next = colors[(i+1)%colors.length]
                htmlElement.classList.add(next)
                return
            }
        }
        htmlElement.classList.add(colors[0])
        
    })


});
