// Selector
const mobileMenu =  document.querySelector('.mobile_menu');
const menuItem =  document.querySelector('.menu_item ul');
const about_img =  document.querySelector('.about_img');
const video_content =  document.querySelector('.video_content');
const lightbox_content =  document.querySelector('.lightbox_content');
const gal_img = document.querySelectorAll('.gal_img');
const image_lightbox = document.querySelector('.image_lightbox');
const image_lightbox_content = document.querySelector('.image_lightbox');
const lightbox_img = document.querySelector('.lightbox_img img');
const img_gallery = document.querySelectorAll('.img_gallery');


mobileMenu.addEventListener('click', () =>{
    menuItem.classList.toggle('show')
});

about_img.addEventListener('click', () =>{
    video_content.classList.add('show_video')
});
video_content.addEventListener('click', () =>{
    video_content.classList.remove('show_video')
});

lightbox_content.addEventListener('click', (e) =>{
    e.stopPropagation()
});


gal_img.forEach((img) =>{
    img.addEventListener('click', () =>{
        image_lightbox.classList.add('show_img');
        lightbox_img.src = img.src
    })
});

// Images Gallery
img_gallery.forEach((img) =>{
    img.addEventListener('click', () =>{
        image_lightbox.classList.add('show_img');
        lightbox_img.src = img.src
    })
});

image_lightbox_content.addEventListener('click', () =>{
    image_lightbox.classList.remove('show_img')
});

// Notification System Build
(() => {
    // Check if browser supports notification
    if (!("Notification" in window)) alert('Notification API not supported')

    // get access to notification api
    if(Notification.permission !== 'granted') 
        Notification.requestPermission(permission => {
            if(permission !== 'granted') 
                alert('Permission not granted')
            else showNotification()
        })
})();


// Send notification
const app_btn = document.querySelectorAll('.app_btn')

app_btn.forEach((btn) => {
    btn.addEventListener('click', showNotification)
})

function showNotification () {
    const notification = new Notification('Hello!', {
        body: 'This is a notification',
        icon: 'https://symfony.com/images/logos/header-logo.svg'
    })
    // close the notification after 10 seconds
    setTimeout(() => {
        notification.close();
    }, 10 * 1000);

    // navigate to a URL when clicked
    notification.addEventListener('click', () => {
        window.open('https://www.khaliddev.com', '_blank');
    });
}