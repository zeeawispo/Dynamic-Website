document.addEventListener('DOMContentLoaded', function () {
    // Content Replacement
    const sidebarItems = document.querySelectorAll('aside ul li');
    const mainSections = document.querySelectorAll('main section');

    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            // Reset content in all sections
            mainSections.forEach(section => section.style.display = 'none');
            
            // Display the corresponding section based on the clicked item
            mainSections[index].style.display = 'block';
        });
    });

    // Style Alteration
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', function () {
        // Change background color and text color
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    })
