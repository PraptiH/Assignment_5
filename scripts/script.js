const buttons = document.querySelectorAll('.complete-btn');
const btn1 =document.getElementById('btn-1');
const btn2 =document.getElementById('btn-2');
const btn3 =document.getElementById('btn-3');
const btn4 =document.getElementById('btn-4');
const btn5 =document.getElementById('btn-5');
const btn6 =document.getElementById('btn-6');
const btn7 =document.getElementById('btn-7')
const activityLog = document.querySelectorAll('.activityLog');


for(const btn of buttons){
    btn.addEventListener('click',function(){
        const textAssigned = document.getElementById('text-assigned').innerText;
        const convertedTextAssigned = parseInt(textAssigned);
        const completedTask = document.getElementById('completedTask').innerText;
        const convertedCompletedTask =parseInt(completedTask);
        const date = new Date();
        const time = date.toLocaleTimeString();

        if(btn==btn1){
            alert("Board Updated Succesfully");
            const activity1 = document.getElementById('activity1');
            activity1.innerText = `You have completed the task Fix Mobile Button Issue at ${time}`;
            activity1.classList.remove('hidden');
        }
        if(btn==btn2){
            alert("Board Updated Succesfully");
            const activity2 = document.getElementById('activity2');
            activity2.innerText = `You have completed the task Add Dark Mode at ${time}`;
            activity2.classList.remove('hidden');
        }
        if(btn==btn3){
            alert("Board Updated Succesfully");
            const activity3 = document.getElementById('activity3');
            activity3.innerText = `You have completed the task Optimize Home Page at ${time}`;
            activity3.classList.remove('hidden');
        }
        if(btn==btn4){
            alert("Board Updated Succesfully");
            const activity4 = document.getElementById('activity4');
            activity4.innerText = `You have completed the task Add New Emoji at ${time}`;
            activity4.classList.remove('hidden');
        }
        if(btn==btn5){
            alert("Board Updated Succesfully");
            const activity5 = document.getElementById('activity5');
            activity5.innerText = `You have completed the task Integrate OpenAI API at ${time}`;
            activity5.classList.remove('hidden');
        }
        if(btn==btn6){
            alert("Board Updated Succesfully");
            const activity6 = document.getElementById('activity6');
            activity6.innerText = `You have completed the task Improve Job Searching at ${time}`;
            activity6.classList.remove('hidden');
        }

        if(convertedTextAssigned>0){
            const remaining = convertedTextAssigned - 1;
            const completed = convertedCompletedTask +1;
            document.getElementById('text-assigned').innerText = remaining;
            document.getElementById('completedTask').innerText = completed;
           
        }
    }
    )
}

btn7.addEventListener('click',function(){
    for(const activity of activityLog){
        if(activity.innerText!==''){
            activity.innerText=''
            activity.classList.add('hidden')
        }
    }
})

