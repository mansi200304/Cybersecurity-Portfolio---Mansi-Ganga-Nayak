class LoadingScreen {
    constructor() {
        this.element = document.getElementById('loading-screen');
        this.subtitleElement = document.querySelector('.loading-subtitle');
        this.callback = null;
        this.minDisplayTime = 5000;
        this.startTime = Date.now();
        this.messages = [
            'INITIALIZING SYSTEMS...',
            'SCANNING NETWORK...',
            'CHECKING SECURITY PROTOCOLS...',
            'LOADING DEFENSE MATRIX...',
            'VERIFYING CREDENTIALS...',
            'ACCESS GRANTED'
        ];
        this.currentMessageIndex = 0;
        this.messageInterval = null;
    }

    show() {
        if (this.element) {
            this.element.classList.remove('fade-out');
            this.element.style.display = 'flex';
            this.startMessageSequence();
        }
    }

    startMessageSequence() {
        this.currentMessageIndex = 0;
        this.updateMessage();
        
        this.messageInterval = setInterval(() => {
            this.currentMessageIndex++;
            if (this.currentMessageIndex < this.messages.length) {
                this.updateMessage();
            } else {
                clearInterval(this.messageInterval);
            }
        }, 800);
    }

    updateMessage() {
        if (this.subtitleElement) {
            this.subtitleElement.style.opacity = '0';
            setTimeout(() => {
                this.subtitleElement.textContent = this.messages[this.currentMessageIndex];
                this.subtitleElement.style.opacity = '1';
            }, 150);
        }
    }

    hide() {
        if (!this.element) return;

        const elapsed = Date.now() - this.startTime;
        const remainingTime = Math.max(0, this.minDisplayTime - elapsed);

        setTimeout(() => {
            if (this.messageInterval) {
                clearInterval(this.messageInterval);
            }
            
            this.element.classList.add('fade-out');
            
            setTimeout(() => {
                this.element.style.display = 'none';
                if (this.callback) {
                    this.callback();
                }
            }, 800);
        }, remainingTime);
    }

    onComplete(callback) {
        this.callback = callback;
    }
}

const loadingScreen = new LoadingScreen();

window.addEventListener('DOMContentLoaded', () => {
    loadingScreen.show();
    loadingScreen.hide();
});
