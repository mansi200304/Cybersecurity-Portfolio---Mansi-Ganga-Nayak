class CyberGuardAI {
    constructor() {
        this.knowledgeBase = this.initKnowledgeBase();
        this.conversationContext = [];
        this.initUI();
    }

    initKnowledgeBase() {
        return {
            greetings: {
                patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
                responses: [
                    "Hello! I'm CyberGuard AI, your cybersecurity learning assistant. I can help you understand threat analysis, penetration testing, digital forensics, cyber crime investigation, and financial cybersecurity. What would you like to learn about?",
                    "Hi there! Ready to dive into the world of cybersecurity? Ask me about any security topic - from malware analysis to penetration testing!",
                    "Greetings, security enthusiast! I'm here to help you master cybersecurity concepts. What topic interests you today?"
                ]
            },
            
            penetrationTesting: {
                patterns: ['penetration test', 'pentest', 'pen test', 'ethical hacking', 'vulnerability assessment', 'security testing'],
                responses: [
                    `**Penetration Testing Overview:**

Penetration testing (pentesting) is a simulated cyber attack to identify security vulnerabilities before malicious actors exploit them.

**Key Phases:**
1. **Reconnaissance** - Gathering information about the target
2. **Scanning** - Identifying open ports, services, and vulnerabilities
3. **Gaining Access** - Exploiting vulnerabilities
4. **Maintaining Access** - Establishing persistence
5. **Covering Tracks** - Removing evidence of the test

**Common Tools:**
- \`nmap\` - Network scanning
- \`Metasploit\` - Exploitation framework
- \`Burp Suite\` - Web app testing
- \`Wireshark\` - Network analysis

**Types:**
- Black Box: No prior knowledge
- White Box: Full knowledge
- Gray Box: Partial knowledge

Would you like to know more about any specific phase or tool?`
                ]
            },

            threatAnalysis: {
                patterns: ['threat analysis', 'threat intelligence', 'threat modeling', 'attack vector', 'threat hunting'],
                responses: [
                    `**Threat Analysis & Intelligence:**

Threat analysis is the systematic identification and assessment of potential threats to an organization's assets.

**Key Components:**

1. **Threat Actors:**
   - Nation-states (APT groups)
   - Cybercriminals
   - Hacktivists
   - Insider threats

2. **Attack Vectors:**
   - Phishing & Social Engineering
   - Malware & Ransomware
   - Zero-day exploits
   - Supply chain attacks
   - DDoS attacks

3. **Threat Intelligence Cycle:**
   - Collection → Processing → Analysis → Dissemination → Feedback

**Frameworks:**
- MITRE ATT&CK - Adversary tactics and techniques
- Diamond Model - Relationships between adversaries and victims
- Cyber Kill Chain - Attack lifecycle phases

**Tools:**
- SIEM (Splunk, ELK Stack)
- Threat intelligence platforms (ThreatConnect, MISP)
- IDS/IPS (Snort, Suricata)

Need specific information about threat actors or attack patterns?`
                ]
            },

            digitalForensics: {
                patterns: ['digital forensics', 'forensics', 'incident response', 'forensic analysis', 'evidence collection'],
                responses: [
                    `**Digital Forensics:**

Digital forensics is the process of uncovering and interpreting electronic data for use in legal proceedings or incident investigation.

**Investigation Process:**

1. **Identification** - Recognize potential evidence
2. **Preservation** - Secure and protect evidence
3. **Collection** - Gather data systematically
4. **Analysis** - Examine and correlate evidence
5. **Documentation** - Record findings
6. **Presentation** - Report results

**Key Areas:**

**Disk Forensics:**
- File recovery and analysis
- Timeline creation
- Tools: \`Autopsy\`, \`FTK Imager\`, \`EnCase\`

**Memory Forensics:**
- RAM analysis for active processes, network connections
- Tools: \`Volatility\`, \`Rekall\`

**Network Forensics:**
- Packet capture analysis
- Tools: \`Wireshark\`, \`tcpdump\`, \`NetworkMiner\`

**Mobile Forensics:**
- iOS/Android data extraction
- Tools: \`Cellebrite\`, \`Oxygen Forensics\`

**Best Practices:**
- Maintain chain of custody
- Use write blockers
- Hash verification (MD5, SHA-256)
- Document everything

What aspect of forensics would you like to explore?`
                ]
            },

            cyberCrime: {
                patterns: ['cyber crime', 'cybercrime', 'online fraud', 'identity theft', 'ransomware', 'phishing'],
                responses: [
                    `**Cyber Crime Investigation:**

Cyber crime encompasses illegal activities conducted through digital means. Understanding these crimes is crucial for effective investigation and prevention.

**Major Categories:**

**1. Financial Crimes:**
- Credit card fraud
- Banking trojans
- Cryptocurrency theft
- Business Email Compromise (BEC)

**2. Data Breaches:**
- Unauthorized access to databases
- Personally Identifiable Information (PII) theft
- Intellectual property theft

**3. Ransomware:**
- File encryption attacks
- Double extortion (encrypt + leak threats)
- Examples: WannaCry, REvil, LockBit

**4. Phishing & Social Engineering:**
- Spear phishing (targeted)
- Whaling (executives)
- Vishing (voice phishing)
- Smishing (SMS phishing)

**5. Identity Theft:**
- Account takeover
- Synthetic identity fraud
- Dark web marketplaces

**Investigation Techniques:**
- Log analysis
- Network traffic monitoring
- Malware reverse engineering
- OSINT (Open Source Intelligence)
- Collaboration with law enforcement

**Legal Frameworks:**
- CFAA (Computer Fraud and Abuse Act)
- GDPR compliance
- Chain of custody requirements

Want to know more about investigating specific types of cyber crime?`
                ]
            },

            financialCybersecurity: {
                patterns: ['financial security', 'fintech security', 'banking security', 'payment fraud', 'financial cybersecurity'],
                responses: [
                    `**Financial Cybersecurity:**

Protecting financial systems and transactions from cyber threats is critical in today's digital economy.

**Key Threats in Finance:**

**1. Payment Fraud:**
- Card-not-present (CNP) fraud
- ATM skimming
- Point-of-Sale (POS) malware
- Account takeover attacks

**2. Banking Trojans:**
- Zeus, Emotet, TrickBot
- Credential harvesting
- Transaction manipulation

**3. Cryptocurrency Attacks:**
- Wallet theft
- Exchange hacks
- Smart contract vulnerabilities
- 51% attacks on blockchains

**4. Insider Threats:**
- Unauthorized trading
- Data exfiltration
- Privilege abuse

**Security Measures:**

**Authentication:**
- Multi-factor authentication (MFA)
- Biometric verification
- Behavioral analytics

**Fraud Detection:**
- Machine learning models
- Real-time transaction monitoring
- Anomaly detection
- Risk scoring

**Compliance:**
- PCI DSS (Payment Card Industry)
- SOX (Sarbanes-Oxley)
- KYC/AML regulations
- GLBA (Gramm-Leach-Bliley Act)

**Technologies:**
- Tokenization
- Encryption at rest/in transit
- Hardware Security Modules (HSM)
- Blockchain for transparency

Interested in a specific financial security domain?`
                ]
            },

            fraudDetection: {
                patterns: ['fraud detection', 'fraud prevention', 'anomaly detection', 'fraud analysis'],
                responses: [
                    `**Fraud Detection & Prevention:**

Modern fraud detection uses advanced analytics and machine learning to identify suspicious patterns.

**Detection Techniques:**

**1. Rule-Based Systems:**
- Threshold monitoring (e.g., transaction > $10,000)
- Velocity checks (multiple transactions in short time)
- Geolocation analysis
- Blacklist matching

**2. Machine Learning Approaches:**
- **Supervised Learning:**
  - Random Forests
  - Gradient Boosting (XGBoost)
  - Neural Networks
  
- **Unsupervised Learning:**
  - Clustering (K-means, DBSCAN)
  - Isolation Forests
  - Autoencoders for anomaly detection

**3. Behavioral Analytics:**
- User behavior profiling
- Device fingerprinting
- Session analysis
- Keystroke dynamics

**Common Fraud Patterns:**

- **Card Fraud:** Testing small amounts before large purchases
- **Account Takeover:** Login from unusual location + immediate profile changes
- **Synthetic Identity:** Combination of real and fake information
- **Friendly Fraud:** Legitimate transaction followed by chargeback

**Red Flags:**
- Multiple failed login attempts
- Rapid succession of transactions
- Shipping/billing address mismatch
- Use of VPN/proxy from high-risk countries
- Unusual device or browser

**Prevention Strategies:**
- Real-time risk scoring
- Step-up authentication
- Transaction velocity limits
- Address Verification System (AVS)
- CVV verification
- 3D Secure protocols

Need details on implementing fraud detection systems?`
                ]
            },

            malware: {
                patterns: ['malware', 'virus', 'trojan', 'worm', 'spyware', 'adware', 'rootkit', 'malware analysis'],
                responses: [
                    `**Malware Analysis:**

Understanding malware is essential for cybersecurity defense and incident response.

**Types of Malware:**

1. **Viruses** - Self-replicating code attached to files
2. **Worms** - Self-propagating across networks
3. **Trojans** - Disguised as legitimate software
4. **Ransomware** - Encrypts files for ransom
5. **Spyware** - Steals information
6. **Rootkits** - Hides malicious activity
7. **Botnets** - Network of infected devices

**Analysis Techniques:**

**Static Analysis:**
- File hash analysis (MD5, SHA-256)
- Strings extraction
- PE header examination
- Signature detection
- Tools: \`pestudio\`, \`PEview\`, \`IDA Pro\`

**Dynamic Analysis:**
- Sandboxing
- Process monitoring
- Network traffic analysis
- API call tracing
- Tools: \`Cuckoo Sandbox\`, \`Any.run\`, \`Process Monitor\`

**Indicators of Compromise (IOCs):**
- File hashes
- IP addresses
- Domain names
- Registry keys
- Mutexes

**Mitigation:**
- Endpoint protection (EDR)
- Application whitelisting
- Network segmentation
- Regular patching
- User awareness training

Want to learn about reverse engineering or specific malware families?`
                ]
            },

            networking: {
                patterns: ['network security', 'firewall', 'ids', 'ips', 'vpn', 'network monitoring'],
                responses: [
                    `**Network Security:**

Securing network infrastructure is fundamental to overall cybersecurity posture.

**Key Components:**

**1. Firewalls:**
- Packet filtering
- Stateful inspection
- Application-layer filtering
- Next-gen firewalls (NGFW)

**2. IDS/IPS:**
- **IDS (Intrusion Detection):** Monitors and alerts
- **IPS (Intrusion Prevention):** Monitors and blocks
- Signature-based vs. anomaly-based
- Tools: \`Snort\`, \`Suricata\`

**3. VPNs:**
- Site-to-site VPN
- Remote access VPN
- IPsec vs. SSL/TLS
- Zero-trust architecture

**4. Network Segmentation:**
- VLANs (Virtual LANs)
- DMZ (Demilitarized Zone)
- Micro-segmentation
- Air-gapping for critical systems

**Monitoring & Analysis:**
- SIEM integration
- NetFlow analysis
- Packet capture (\`tcpdump\`, \`Wireshark\`)
- Bandwidth monitoring

**Common Attacks:**
- Man-in-the-Middle (MitM)
- ARP spoofing
- DNS poisoning
- DDoS attacks
- Port scanning

**Best Practices:**
- Principle of least privilege
- Default deny policies
- Regular security audits
- Encrypted communications
- Network access control (NAC)

Need details on specific network security technologies?`
                ]
            },

            encryption: {
                patterns: ['encryption', 'cryptography', 'aes', 'rsa', 'hashing', 'ssl', 'tls'],
                responses: [
                    `**Encryption & Cryptography:**

Cryptography is the foundation of data protection and secure communications.

**Symmetric Encryption:**
- Same key for encryption/decryption
- Fast and efficient
- **Algorithms:** AES-256, ChaCha20, 3DES
- **Use cases:** Disk encryption, VPNs

**Asymmetric Encryption:**
- Public key (encrypt) + Private key (decrypt)
- Slower but enables key exchange
- **Algorithms:** RSA, ECC (Elliptic Curve)
- **Use cases:** Digital signatures, HTTPS

**Hashing:**
- One-way function
- Fixed-length output
- **Algorithms:** SHA-256, SHA-3, bcrypt (passwords)
- **Use cases:** File integrity, password storage

**Key Concepts:**

**TLS/SSL:**
- Handshake process
- Certificate authorities
- Perfect Forward Secrecy (PFS)

**Digital Signatures:**
- Non-repudiation
- Message authentication
- Verification with public key

**Key Management:**
- Key generation
- Secure storage (HSM)
- Rotation policies
- Key escrow

**Attacks:**
- Brute force
- Rainbow tables
- Padding oracle attacks
- Side-channel attacks

**Best Practices:**
- Use strong, proven algorithms
- Proper key length (minimum 2048-bit RSA, 256-bit AES)
- Salt passwords before hashing
- Regular key rotation
- Never roll your own crypto!

Questions about specific encryption methods?`
                ]
            },

            cloudSecurity: {
                patterns: ['cloud security', 'aws security', 'azure security', 'cloud infrastructure'],
                responses: [
                    `**Cloud Security:**

Securing cloud infrastructure requires understanding shared responsibility models and cloud-specific threats.

**Shared Responsibility Model:**
- **Cloud Provider:** Physical security, hypervisor, network
- **Customer:** Data, access control, applications, configurations

**Key Areas:**

**1. Identity & Access Management (IAM):**
- Principle of least privilege
- Multi-factor authentication
- Role-based access control (RBAC)
- Service accounts management

**2. Data Protection:**
- Encryption at rest (KMS)
- Encryption in transit (TLS)
- Data classification
- Backup and recovery

**3. Network Security:**
- Virtual Private Clouds (VPC)
- Security groups & NACLs
- Private subnets
- VPN/Direct Connect

**4. Monitoring & Logging:**
- CloudTrail (AWS) / Activity Logs (Azure)
- CloudWatch / Azure Monitor
- SIEM integration
- Anomaly detection

**Common Threats:**
- Misconfigured S3 buckets
- Exposed API keys
- Insufficient logging
- Account hijacking
- Insecure APIs

**Tools:**
- Cloud Security Posture Management (CSPM)
- AWS GuardDuty, Security Hub
- Azure Defender
- Cloud Access Security Broker (CASB)

**Compliance:**
- SOC 2
- ISO 27001
- HIPAA (healthcare)
- PCI DSS (payments)

Want to dive deeper into a specific cloud platform?`
                ]
            },

            certifications: {
                patterns: ['certification', 'cert', 'oscp', 'ceh', 'cissp', 'comptia', 'security+'],
                responses: [
                    `**Cybersecurity Certifications:**

Professional certifications validate your skills and knowledge in cybersecurity.

**Entry Level:**
- **CompTIA Security+** - Security fundamentals
- **CompTIA Network+** - Networking basics
- **Google Cybersecurity Certificate** - Career entry

**Intermediate:**
- **CEH (Certified Ethical Hacker)** - Ethical hacking techniques
- **CompTIA CySA+** - Cybersecurity analyst
- **GIAC Security Essentials (GSEC)** - Security practitioner

**Advanced/Offensive:**
- **OSCP (Offensive Security Certified Professional)** - Hands-on pentesting
- **GPEN** - Penetration testing
- **eWPTX** - Web application pentesting

**Management/Leadership:**
- **CISSP** - Information security management
- **CISM** - Security management
- **CRISC** - Risk and information systems control

**Specialized:**
- **GCFA** - Forensics and incident response
- **GCIH** - Incident handling
- **GREM** - Reverse engineering and malware analysis
- **CCSP** - Cloud security

**Preparation Tips:**
- Hands-on practice (labs, CTFs)
- Study official materials
- Join study groups
- Take practice exams
- Build a home lab

Which certification path interests you?`
                ]
            },

            tools: {
                patterns: ['tools', 'software', 'kali', 'metasploit', 'burp suite', 'wireshark', 'nmap'],
                responses: [
                    `**Essential Cybersecurity Tools:**

**Reconnaissance:**
- \`nmap\` - Network scanning and port discovery
- \`Shodan\` - Internet-connected device search
- \`theHarvester\` - OSINT gathering
- \`Recon-ng\` - Web reconnaissance

**Vulnerability Scanning:**
- \`Nessus\` - Vulnerability assessment
- \`OpenVAS\` - Open-source scanner
- \`Nikto\` - Web server scanner

**Exploitation:**
- \`Metasploit Framework\` - Exploitation platform
- \`SQLMap\` - SQL injection automation
- \`BeEF\` - Browser exploitation

**Web Application Testing:**
- \`Burp Suite\` - Web proxy and scanner
- \`OWASP ZAP\` - Web app security
- \`Postman\` - API testing

**Network Analysis:**
- \`Wireshark\` - Packet analyzer
- \`tcpdump\` - Command-line packet capture
- \`NetworkMiner\` - Network forensics

**Password Cracking:**
- \`John the Ripper\` - Password cracker
- \`Hashcat\` - Advanced password recovery
- \`Hydra\` - Network login cracker

**Forensics:**
- \`Autopsy\` - Digital forensics platform
- \`Volatility\` - Memory forensics
- \`FTK Imager\` - Data acquisition

**SIEM:**
- \`Splunk\` - Log analysis and SIEM
- \`ELK Stack\` - Elasticsearch, Logstash, Kibana

Want details on how to use a specific tool?`
                ]
            },

            learning: {
                patterns: ['learn', 'study', 'practice', 'beginner', 'start', 'how to learn', 'resources'],
                responses: [
                    `**Learning Cybersecurity - Roadmap:**

**1. Foundational Knowledge:**
- Networking (TCP/IP, OSI model)
- Operating Systems (Linux, Windows)
- Programming (Python, Bash, PowerShell)
- Web technologies (HTTP, DNS, databases)

**2. Security Fundamentals:**
- CIA Triad (Confidentiality, Integrity, Availability)
- Authentication vs. Authorization
- Encryption basics
- Common vulnerabilities (OWASP Top 10)

**3. Hands-On Practice:**

**Free Labs:**
- TryHackMe (beginner-friendly)
- HackTheBox (intermediate)
- PentesterLab
- OverTheWire (Linux challenges)

**CTF Platforms:**
- picoCTF
- CTFTime.org
- VulnHub

**4. Recommended Learning Path:**

**Month 1-2:** Networking + Linux basics
**Month 3-4:** Security fundamentals + Python
**Month 5-6:** Web app security + hands-on labs
**Month 7-8:** Network security + pentesting basics
**Month 9-12:** Specialization (forensics, cloud, etc.)

**5. Resources:**

**Free Courses:**
- Cybrary
- Professor Messer (Security+)
- OWASP WebGoat
- Google Cybersecurity Certificate

**Books:**
- "The Web Application Hacker's Handbook"
- "Practical Malware Analysis"
- "Metasploit: The Penetration Tester's Guide"

**Communities:**
- Reddit: r/cybersecurity, r/netsec
- Discord security servers
- Local security meetups
- DEFCON groups

**Pro Tips:**
- Build a home lab
- Document everything you learn
- Participate in CTFs
- Contribute to open source
- Network with professionals

What specific area would you like to start with?`
                ]
            },

            careers: {
                patterns: ['career', 'job', 'salary', 'work', 'hire', 'employment'],
                responses: [
                    `**Cybersecurity Career Paths:**

**1. Security Analyst:**
- Monitor security systems (SIEM)
- Investigate incidents
- Threat intelligence
- Entry-level position
- Avg salary: $70k-$95k

**2. Penetration Tester:**
- Simulate attacks
- Find vulnerabilities
- Write detailed reports
- Requires: OSCP, CEH
- Avg salary: $85k-$130k

**3. Security Engineer:**
- Design security architecture
- Implement security solutions
- Automate security processes
- Avg salary: $95k-$140k

**4. Incident Responder:**
- Handle security breaches
- Forensic analysis
- Containment and recovery
- Avg salary: $80k-$120k

**5. Security Architect:**
- Design enterprise security
- Risk assessment
- Compliance
- Senior role
- Avg salary: $130k-$180k

**6. Threat Hunter:**
- Proactive threat detection
- Advanced analytics
- Threat intelligence
- Avg salary: $90k-$140k

**7. Chief Information Security Officer (CISO):**
- Executive leadership
- Strategy and governance
- Risk management
- Avg salary: $180k-$300k+

**Skills in Demand:**
- Cloud security (AWS, Azure)
- Zero trust architecture
- DevSecOps
- Threat intelligence
- Python/automation
- Container security

**How to Stand Out:**
- Certifications (OSCP, CISSP)
- GitHub portfolio
- Bug bounty participation
- Technical blog
- Conference presentations
- Contributions to security tools

Interested in a specific career path?`
                ]
            }
        };
    }

    findBestMatch(userInput) {
        const input = userInput.toLowerCase();
        
        for (const [category, data] of Object.entries(this.knowledgeBase)) {
            for (const pattern of data.patterns) {
                if (input.includes(pattern)) {
                    const responses = data.responses;
                    return responses[Math.floor(Math.random() * responses.length)];
                }
            }
        }
        
        return this.getDefaultResponse(input);
    }

    getDefaultResponse(input) {
        const defaultResponses = [
            "I'm specialized in cybersecurity topics. Try asking me about:\n\n• Penetration Testing\n• Threat Analysis\n• Digital Forensics\n• Cyber Crime Investigation\n• Financial Cybersecurity\n• Fraud Detection\n• Malware Analysis\n• Network Security\n• Encryption\n• Cloud Security\n\nWhat would you like to learn about?",
            "I can help you with various cybersecurity topics! Some areas I cover:\n\n• Security tools and techniques\n• Career guidance\n• Certifications\n• Hands-on learning resources\n• Incident response\n• Compliance and regulations\n\nWhat's your question?",
            "Hmm, I'm not sure about that specific query. I'm focused on cybersecurity education. Ask me about threat hunting, pentesting, forensics, or any security topic!"
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    async getResponse(userMessage) {
        this.conversationContext.push({ role: 'user', content: userMessage });
        
        await this.delay(800 + Math.random() * 1200);
        
        const response = this.findBestMatch(userMessage);
        this.conversationContext.push({ role: 'assistant', content: response });
        
        return response;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    initUI() {
        const chatButton = document.createElement('div');
        chatButton.className = 'cyberguard-chat-button';
        chatButton.innerHTML = '🛡️';
        chatButton.title = 'CyberGuard AI Assistant';
        chatButton.onclick = () => this.toggleChat();

        const chatWindow = document.createElement('div');
        chatWindow.className = 'cyberguard-chat-window';
        chatWindow.innerHTML = `
            <div class="cyberguard-header">
                <div class="cyberguard-title">
                    <span class="cyberguard-status"></span>
                    CyberGuard AI
                </div>
                <button class="cyberguard-close">&times;</button>
            </div>
            <div class="cyberguard-messages" id="cyberguard-messages">
                <div class="cyberguard-message">
                    <div class="message-bubble ai">
                        <strong>👋 Welcome to CyberGuard AI!</strong><br><br>
                        I'm your cybersecurity learning assistant. I can help you understand:
                        <ul>
                            <li>Penetration Testing & Ethical Hacking</li>
                            <li>Threat Analysis & Intelligence</li>
                            <li>Digital Forensics & Incident Response</li>
                            <li>Cyber Crime Investigation</li>
                            <li>Financial Cybersecurity & Fraud Detection</li>
                            <li>Security Tools & Certifications</li>
                        </ul>
                        Try asking: "What is penetration testing?" or "How do I start learning cybersecurity?"
                        <div class="quick-topics">
                            <span class="topic-chip" onclick="cyberGuard.sendQuickTopic('What is penetration testing?')">Penetration Testing</span>
                            <span class="topic-chip" onclick="cyberGuard.sendQuickTopic('Explain threat analysis')">Threat Analysis</span>
                            <span class="topic-chip" onclick="cyberGuard.sendQuickTopic('Tell me about digital forensics')">Digital Forensics</span>
                            <span class="topic-chip" onclick="cyberGuard.sendQuickTopic('How to detect fraud?')">Fraud Detection</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cyberguard-input-area">
                <input 
                    type="text" 
                    class="cyberguard-input" 
                    placeholder="Ask about cybersecurity..."
                    id="cyberguard-input"
                >
                <button class="cyberguard-send" id="cyberguard-send">Send</button>
            </div>
        `;

        document.body.appendChild(chatButton);
        document.body.appendChild(chatWindow);

        document.querySelector('.cyberguard-close').onclick = () => this.toggleChat();
        document.getElementById('cyberguard-send').onclick = () => this.sendMessage();
        document.getElementById('cyberguard-input').onkeypress = (e) => {
            if (e.key === 'Enter') this.sendMessage();
        };

        this.chatWindow = chatWindow;
        this.messagesContainer = document.getElementById('cyberguard-messages');
        this.input = document.getElementById('cyberguard-input');
        this.sendButton = document.getElementById('cyberguard-send');
    }

    toggleChat() {
        this.chatWindow.classList.toggle('active');
        if (this.chatWindow.classList.contains('active')) {
            this.input.focus();
        }
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.input.value = '';
        this.sendButton.disabled = true;

        this.showTypingIndicator();

        try {
            const response = await this.getResponse(message);
            this.removeTypingIndicator();
            this.addMessage(response, 'ai');
        } catch (error) {
            this.removeTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'ai');
        }

        this.sendButton.disabled = false;
        this.input.focus();
    }

    sendQuickTopic(topic) {
        this.input.value = topic;
        this.sendMessage();
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `cyberguard-message ${sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = `message-bubble ${sender}`;
        bubble.innerHTML = this.formatMessage(content);
        
        messageDiv.appendChild(bubble);
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    formatMessage(content) {
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    }

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'cyberguard-message';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="message-bubble ai typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        this.messagesContainer.appendChild(indicator);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
}

let cyberGuard;
document.addEventListener('DOMContentLoaded', () => {
    cyberGuard = new CyberGuardAI();
});
