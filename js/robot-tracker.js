class RobotTracker {
    constructor() {
        this.robotHead = null;
        this.robotContainer = null;
        this.headCenter = { x: 0, y: 0 };
    }

    init() {
        this.robotContainer = document.getElementById('robot-container');
        this.robotHead = document.getElementById('robot-head');
        
        if (!this.robotHead || !this.robotContainer) {
            console.error('Robot elements not found');
            return;
        }

        this.calculateHeadCenter();
        
        document.addEventListener('mousemove', (event) => this.track(event));
        window.addEventListener('resize', () => this.calculateHeadCenter());
    }

    calculateHeadCenter() {
        const containerRect = this.robotContainer.getBoundingClientRect();
        
        this.headCenter.x = containerRect.left + 150;
        this.headCenter.y = containerRect.top + 100;
    }

    track(event) {
        const deltaX = event.clientX - this.headCenter.x;
        const deltaY = event.clientY - this.headCenter.y;
        
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        const maxRotation = 30;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const normalizedDistance = Math.min(distance / 500, 1);
        const rotationAmount = normalizedDistance * maxRotation;
        
        const clampedAngle = Math.max(-maxRotation, Math.min(maxRotation, angle * normalizedDistance));
        
        this.robotHead.style.transform = `rotate(${clampedAngle}deg)`;
    }
}

if (typeof window !== 'undefined') {
    window.RobotTracker = RobotTracker;
}
