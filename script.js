       
// Function Cart Shopping

        const cartShop = document.querySelector('#cart-shop')
        const closeCheck = document.querySelector('.close-check');
        const checkoutShop = document.querySelector('.checkout-shop');
        const backgroundShop = document.querySelector('.background-shop');
        const hamburger = document.getElementById('hamburger-toogle');
        const close = document.getElementById('close');
        const hamburgerShow = document.getElementById('hamburgerShow');
        const beli = document.getElementById('beli');
        const mainYellow = document.getElementById('mainYellow');
        const mainGrey = document.getElementById('mainGrey');
        const nav = document.querySelector('nav');
        const section = document.getElementById('section');
        const closePopup = document.getElementById('close-popup');
        const icnPopup = document.getElementById('icn-popup');
        const star1 = document.getElementById('star1');
        const star2 = document.getElementById('star2');
        const star3 = document.getElementById('star3');
        const star4 = document.getElementById('star4');
        const star5 = document.getElementById('star5');
        const beliItems = document.getElementById('beli-items');
        const popup = document.querySelector('.popup');
        const number = document.querySelector('#number');
        const plus = document.querySelector('#plus');
        const minus = document.querySelector('#minus');
        const containerCard = document.querySelector('.container-card');



        hamburger.addEventListener('click', function() {
            hamburgerShow.classList.toggle('slide')

            document.querySelector('#outer').classList.toggle('background-nav')

        })

// Main Pindah Posisi //
        beli.addEventListener('click', function() {
            mainYellow.classList.toggle('pindah')
            mainGrey.classList.toggle('pindah')
        })

        document.querySelector('#outer').onclick = () => {
            hamburger.click()
        }
        

// rating

        closePopup.addEventListener('click', function() {
            section.style.display = 'none'
            
        })
         icnPopup.addEventListener('click', function() {
            section.style.display = 'none'


        })

// Function close check

         
         closeCheck.onclick = function() {
            document.querySelector('.container-card').style.animation = 'dissapear 0.2s forwards'
            setTimeout(()=>{
            checkoutShop.style.display = 'none'
            document.querySelector('.container-card').style.animation = ''
            }, 500)

         }

         backgroundShop.onclick = function() {
           document.querySelector('.container-card').style.animation = 'dissapear 0.2s forwards'
            setTimeout(()=>{
                checkoutShop.style.display = 'none'
                document.querySelector('.container-card').style.animation = ''  
            }, 500)
         }

         cartShop.onclick = function() {
            checkoutShop.style.display = 'flex'
            containerCard.style.animation = 'showPopup .5s forwards'
         }

//rating fumction

         document.querySelectorAll('#star').forEach((star) => {
            star.onclick = function(){
                star.classList.toggle('yellow')
            }
        })


// popup function
            beliItems.onclick = function() {
                section.style.display = 'flex'
                popup.style.animation = 'showPopup .5s forwards'
            }

            plus.onclick = function( ) {
                let jumlah = parseInt(number.innerHTML)
                
                number.innerHTML = jumlah + 1
                
            }

            minus.onclick = function( ) {
                let jumlah = parseInt(number.innerHTML)
                if (jumlah - 1 != 0){
                    number.innerHTML = jumlah -1
                }
                
            }

// Function Check Out



            document.querySelectorAll('.close-card').forEach((close) => {
                close.onclick = function() {
                    let className = '.' + close.dataset.id
                    document.querySelector(className).style.animation = 'closeCard .5s forwards'
                    setTimeout(() => {
                        document.querySelector(className).remove();
                    },500) 
                }
            })


// Function menu Navbar

            const menuNav = document.querySelector('#menuNav');

            menuNav.onclick = function() {
                mainYellow.classList.toggle('pindah')
            }

