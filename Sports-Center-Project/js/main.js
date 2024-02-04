document.addEventListener('DOMContentLoaded', function() {
    // Butonların tanımlanması
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
});
