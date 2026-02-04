class LoadingScreen {
    constructor() {
        this.element = document.getElementById('loading-screen');
        this.callback = null;
        this.minDisplayTime = 2000;
        this.startTime = Date.now();
    }

    show() {
        if (this.element) {
            this.element.classList.remove('fade-out');
            this.element.style.display = 'flex';
        }
    }

    hide() {
        if (!this.element) return;

        const elapsed = Date.now() - this.startTime;
        const remainingTime = Math.max(0, this.minDisplayTime - elapsed);

        setTimeout(() => {
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
