

class MyModal extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.render()
    }

    render(){
        const style = `
        <style>
            .modal{
                display:none;
                position:fixed;
                height:100vh;
                width:100vw;
                background-color:rgba(0,0,0,.8);
                top:0;
                left:0;
                justify-content:center;
                align-items:center;
            }
            .modalcontent{
                background-color:#fff;
                border-radius:10px;
                padding:10px;
                width:70%;
                height:60%;

            }
        </style>
        `
        const template = `
        <div class="modal">
            <div class="modalcontent">
                <slot></slot>
            </div>
        </div>`

        this.shadowRoot.innerHTML = `${style} ${template}`
    }

    open(){
        this.shadowRoot.querySelector('.modal').style.display = 'flex'
    }

    close(){
        this.shadowRoot.querySelector('.modal').style.display = 'none'
    }

}

class MyClose extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.render()
    }

        render(){
            this.shadowRoot.innerHTML = `
                <button>Close</button>
            `
        }
}

class MyTitle extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.render()
    }

        render(){
            this.shadowRoot.innerHTML = `
                <h1>
                    <slot></slot>
                </h1>
            `
        }
}

customElements.define('my-modal',MyModal)
customElements.define('my-modal-close',MyClose)
customElements.define('my-modal-title',MyTitle)