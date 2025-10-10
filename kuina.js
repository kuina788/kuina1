// Kuina.js - Sample JavaScript File
console.log('Hello from Kuina.js!');

class Kuina {
    constructor(name) {
        this.name = name;
        this.version = '1.0.0';
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }
    
    getInfo() {
        return {
            name: this.name,
            version: this.version,
            timestamp: new Date().toISOString()
        };
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Kuina;
}

// Example usage
const kuina = new Kuina('Kuina Bot');
kuina.greet();
console.log('Info:', kuina.getInfo());
