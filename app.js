// target the start btn

document.querySelector('.start').addEventListener('click', (event)=>{
     event.preventDefault();
     
    //  target the hr span, min span and sec span
    let hr_span = document.querySelector('.hr-span')
    let min_span = document.querySelector('.min-span')
    let sec_span = document.querySelector('.sec-span')

    // decalring my time variables
    let hr = 0;
    let min = 0;
    let sec = 0;

    let timing = setInterval(()=>{
            sec++
            if(sec === 60){
                  min++
                  sec = 0
            }

            if(min === 60){
                hr++
                min = 0
            }


            // setting secs span
            if(sec < 10){
                 sec_span.textContent = "0" + sec
            }else{
                sec_span.textContent =  sec
            }


            // setting mins span
            if(min < 10){
                 min_span.textContent = "0" + min
            }else{
                min_span.textContent = min
            }

            // setting hour span
            if(hr < 10){
                hr_span.textContent = "0" + hr
            }else{
                hr_span.textContent = hr
            }

            // stop logic

            document.querySelector('.stop').addEventListener('click', (event)=>{
                    event.preventDefault()
                    clearInterval(timing)
            })


            // reset logic
            document.querySelector('.reset').addEventListener('click', (event)=>{
                  event.preventDefault();
                  hr = 0;
                  min = 0;
                  sec = 0;

                  hr_span.textContent = "00"
                  min_span.textContent = "00"
                  sec_span.textContent = "00"
            })
            


    }, 1000)

})