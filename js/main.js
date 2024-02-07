

document.addEventListener('DOMContentLoaded', function() {

    /* Değerlendirme Formu # 11: Our classes bölümündeki butonlara tıklandığında, 
    butonun altındaki yazı ve resmin değişmesi */
    const yogaButton = document.getElementById('yoga');
    const groupButton = document.getElementById('group');
    const soloButton = document.getElementById('solo');
    const stretchingButton = document.getElementById('stretching');

    yogaButton.addEventListener('click', function() { changeContent('yoga') });
    groupButton.addEventListener('click', function() { changeContent('group') });
    soloButton.addEventListener('click', function() { changeContent('solo') });
    stretchingButton.addEventListener('click', function() { changeContent('stretching') });

    function changeContent(type) {
        const classImage = document.querySelector('#class-img img');
        const classText = document.getElementById('class-text');

        switch(type) {
            case 'yoga':
                classImage.src = 'images/yoga.jpg';
                classText.innerHTML = 'Why Should You Choose Yoga?';
                break;
            case 'group':
                classImage.src = 'images/group.webp';
                classText.innerHTML = 'Why Should You Choose Group Classes?';
                break;
            case 'solo':
                classImage.src = 'images/solo.jpg'; 
                classText.innerHTML = 'Why Should You Choose Solo Class?';
                break;
            case 'stretching':
                classImage.src = 'images/stret.webp'; 
                classText.innerHTML = 'Why Should You Choose Stretching?';
                break;
        }
    }

    // Değerlendirme Formu # 9: Navbar arka planının scroll edildiğinde değişmesi

    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }
    });

    // Değerlendirme Formu # 8: BMI Calculator işlemleri

    const height= document.querySelector("#heightInput");
    const weight= document.querySelector("#weightInput");
    const ucgen= document.querySelector("#bmiTriangle");
    height.addEventListener("input", () =>{
        console.log(height.value)
    })
    
    weight.addEventListener("input", () =>{
        console.log(weight.value)
    
    })
    
    let bmiResult=height.addEventListener("input", () =>{
    
    let bmi=(weight.value / ((height.value/100) * (height.value/100)));
    if(height.value<=0 || height.value<=0){
       bmi=0;
    }
    
     if(bmi > 0 && bmi < 18.5){
        ucgen.style.left=10 + "%";
      
    }else if(bmi >= 18.5 && bmi <= 24.9){
        ucgen.style.left=23 + "%";
    }else if (bmi >= 25 && bmi <= 29.9) {
        ucgen.style.left=39 + "%";
    }
    else if (bmi >= 30 && bmi<= 34.9) {
        ucgen.style.left=55 + "%";
    }
    else if(bmi>=35) {
            
        ucgen.style.left=71+ "%";
    }else{
        ucgen.style.left=6 +"%";
    }
    
    })
    
    weight.addEventListener("input", () =>{
    
        let bmi=(weight.value / ((height.value/100) * (height.value/100)));
        if(height.value<=0 || height.value<=0){
           bmi=0;
        }
        
        if(bmi > 0 && bmi < 18.5){
            ucgen.style.left=10 + "%";
          
        }else if(bmi >= 18.5 && bmi <= 24.9){
            ucgen.style.left=23+ "%";
        }else if (bmi >= 25 && bmi <= 29.9) {
            ucgen.style.left=39+ "%";
        }
        else if (bmi >= 30 && bmi <= 34.9) {
            ucgen.style.left=55+ "%";
        }
        else if(bmi>=35) {
            
            ucgen.style.left=71 +"%";
        }else{
            ucgen.style.left=6+0+ "%";
        }
    
    })

});
