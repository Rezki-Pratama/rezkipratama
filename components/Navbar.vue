<template>
  <!-- Navbar -->
        <nav id="nav" class="navbar">
            <nuxt-link to="/" class="navbar-logo">
                <img src="@/assets/frontend/images/logo_rezki.png" alt="Logo Rezki Travel">
            </nuxt-link>
                <ul id="ul">
                    <li class=""> 
                        <nuxt-link to="/">
                            <div class="btn-navbar">
                                Home
                                <div class="vol"></div>
                            </div>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/project">
                            <div class="btn-navbar">
                                Project
                                <div class="vol"></div>
                            </div>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contact">
                            <div class="btn-navbar">
                                Contact
                                <div class="vol"></div>
                            </div>
                        </nuxt-link>
                    </li>
                </ul>

                <div class="menu-toggle" id="toggle">
                    <input type="checkbox" v-on:click="nextStep">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </nav>
    <!-- End Navbar -->
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
    nextStep: function() {
        const menuToggle = document.querySelector('.menu-toggle input');
        const nav = document.querySelector('nav ul');

        nav.classList.toggle('slide');
    },
    handleScroll: function() {
        let nav = document.getElementById('nav');
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
 },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
// Navbar

.navbar-logo {
    align-items: center;

    img {
        position: relative;

        max-height: 40px;
    }
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: 0.6s;
    padding: 10px 110px;
    z-index: 100000;
    box-shadow: 0px 0px 0px rgba(55, 84, 170,.15);

    ul {
        flex-direction: row;
        display: flex;
        list-style: none;
        width: 35%;
        justify-content: space-between;

        li {

            a {
                font-size: 14px;
                color: #2D2D2D;
                text-decoration: none;
                font-weight: bold;
            }

            .btn-navbar {
                .vol {
                    background-color: #2D2D2D;
                    border-radius: 20px;
                    height: 5px;
                    width: 50%;
                    transition: 1s;
                }
            }

            .btn-navbar:hover .vol {
                width: 100%;
            }

        }
    }

    // Hamburger Menu
    .menu-toggle {
        display: none;
        flex-direction: column;
        height: 20px;
        justify-content: space-between;
        position: relative;

        input {
            position: absolute;
            width: 30px;
            height: 20px;
            opacity: 0;
            z-index: 2;
            cursor: pointer;
        }

        span {
            display: block;
            width: 28px;
            height: 4px;
            background-color: #58AEE6;
            border-radius: 3px;
            transition: all 0.5s;
        }

        // Hamburger menu animation
        span:nth-child(2) {
            transform-origin: 0 0;
        }

        span:nth-child(4) {
            transform-origin: 0 100%;
        }

        input:checked~span:nth-child(2) {
            transform: rotate(45deg) translate(-1px, -1px);
        }

        input:checked~span:nth-child(4) {
            transform: rotate(-45deg) translate(-1px, 0px);
        }

        input:checked~span:nth-child(3) {
            transform: scale(0)
        }
    }
}

.sticky {
    padding: 0px 110px;
    background: #FFF;
    box-shadow: 7px 7px 15px rgba(55, 84, 170,.15);

    ul {
        margin-top:10px;
        display: flex;
        list-style: none;
        width: 35%;
        justify-content: space-between;

        .dropdown {
            position: relative;
            display: inline-block;

            &:hover {
                .dropdown-content {
                    display: block;
                }
            }

            .button-dropdown {
                color: #58AEE6;

                .vol {
                        background-color: #58AEE6;
                        border-radius: 10px;
                        height: 5px;
                        width: 50%;
                        transition: 1s;
                }
            }

            .dropdown-content {
                .dropdown-list {
                    a {
                        color: #FFFFFF;
                    }
                }

            }
        }

        li {

            a {
                color: #58AEE6;
            }

            .btn-navbar {
                .vol {
                    display: block;
                    background-color: #58AEE6;
                }
            }

        }
    }
    
}

@media only screen and (max-width: 1200px) {
    .navbar {
        ul {
            width: 70%;
        }
    }
}

@media only screen and (max-width: 768px) {
    // Navbar
    .navbar {
        background: #FFFFFF;
        padding: 10px 30px;
        ul {
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            padding: 10px 100px;
            width: 100%;
            position: absolute;
            right: 0;
            top: 50px;
            height: 260px;
            background-color: #58AEE6;
            color: #58AEE6;
            border-radius: 0px 0px 8px 8px;
            padding: 30px;
            align-items: left;
            justify-content: space-evenly;
            transform: translateX(100%);
            transition: all 1s;

            li {
                margin-top: 15px;
                color: #58AEE6;
                .btn-navbar {
                    .vol {
                        display: none;
                    }
                }
            }

            .dropdown {
                .dropdown-content {
                    margin-left: 0px;
                    .dropdown-list {
                        a {
                            font-size: 10px;
                        }
                    }
                }

                .button-dropdown {
                    .vol {
                        display: none;
                    }
                }
            }
        }

        ul.slide {
            transform: translateX(0);
        }

        .menu-toggle {
            display: flex;
        }
    }

.sticky {
    background: #FFF;
    box-shadow: 7px 7px 15px rgba(55, 84, 170,.15);

    ul {
        background-color: #FFFFFF;
    }
    
}

}
</style>