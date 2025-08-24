// === CERTIFICATE DATA ===
 let CERTS = [
        {
          title: "Fortinet Certified Fundamentals in CyberSecurity (FCF)",
          provider: "Fortinet",
          image: "/assets/images/FCF.png",
        },
        {
          title: "CISCO Intro to CS",
          provider: "Cisco",
          image: "/assets/images/CISCO CS certi.png",
        },
        {
          title: "OSNIT",
          provider: "Security Blue Team",
          image: "/assets/images/OSNIT_SecurityBlueteam.png",
        },
        {
          title: "FCF Technical intro to CyberSecurity 2.0",
          provider: "Fortinet",
          image: "/assets/images/FCF- tech 2.0.png",
        },
        {
          title: "FCF Intro to the Threat Landscape 3.0",
          provider: "Fortinet",
          image: "/assets/images/FCF_threat 3.0.png",
        },
        {
          title: "Datacom Job Stimulation Certificate",
          provider: "Datacom x Forge",
          image: "/assets/images/Datacom_certi.png",
        },
        {
          title: "Deloitte Job Stimulation Certificate",
          provider: "Deloitte x Forge",
          image: "/assets/images/Deloitte_certi.png",
        },
        {
          title: "Mastercard Job Stimulation Certificate",
          provider: "Mastercard",
          image: "/assets/images/Mastercard_Certificate.png",
        },
        {
          title: "Reliance CS Associate Certi Program",
          provider: "Reliance",
          image: "/assets/images/RelainceCS.png",
        },
        {
          title: "TechMahindra x NSDC Certificate CS",
          provider: "TechMahindra x NSDC",
          image: "/assets/images/TechMahindra Certi.png",
        },
        {
          title: "Reliance x NSDC CS Associate Certi Program",
          provider: "Reliance x NSDC",
          image: "/assets/images/RelianceNDSCCS.png",
        },
        {
          title: "Hydra Expert",
          provider: "Udemy",
          image: "/assets/images/HydraExpert.jpg",
        },
        {
          title: "Email Security",
          provider: "Udemy",
          image: "/assets/images/Udemy Email Security.jpg",
        },
        {
          title: "Command Injection",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethycal Hacking : Command Injection.jpg",
        },
        {
          title: "Mastering Kali Linux",
          provider: "Udemy",
          image: "/assets/images/Udemy Mastering Kali Linux.jpg",
        },
        {
          title: "Digital Hidden Secrets (Steganography)",
          provider: "Udemy",
          image: "/assets/images/Data Hiding.jpg",
        },
        {
          title: "Linux Privilege Escalation",
          provider: "Udemy",
          image:
            "/assets/images/Udemy Ethical Hacking: Linux Privilege Escalation.jpg",
        },
        {
          title: "Metasploit",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethical Hacking: Metasploit.jpg",
        },
        {
          title: "Introduction To Cyber Security",
          provider: "VI Foundation",
          image: "/assets/images/Introduction To Cyber Certi.jpg",
        },
        {
          title: "OSINT: Data Gathering",
          provider: "Udemy",
          image: "/assets/images/Udemy OSNIT: Data Gathering.jpg",
        },
        {
          title: "Password Cracking Office Files",
          provider: "Udemy",
          image: "/assets/images/Udemy Password Cracking Office Files.jpg",
        },
        {
          title: "Phishing",
          provider: "Udemy",
          image: "/assets/images/Udemy Phishing Attack Prevention.jpg",
        },
        {
          title: "Git & Github with Markdown",
          provider: "Udemy",
          image: "/assets/images/Git_Github_Markdown.jpg",
        },
        {
          title: "Intro to CS Badge",
          provider: "Cisco",
          image: "/assets/images/Intro to cs Badge.png",
        },
        {
          title: "Public Speaking",
          provider: "Udemy",
          image: "/assets/images/Udemy Public Speaking Certificate.jpg",
        },
        {
          title: "Prompt Engineering Mastery",
          provider: "Udemy",
          image:
            "/assets/images/Udemy Prompt Engineering Mastery Certificate.jpg",
        },
        {
          title: "Linux Antivirus Essentials",
          provider: "Udemy",
          image: "/assets/images/LInux Antivirus Essentials.jpg",
        },
        {
          title: "Linux Intrusion Essentials",
          provider: "Udemy",
          image: "/assets/images/Linux Intrusion Essentials.jpg",
        },
        {
          title: "Malware Secrets",
          provider: "Udemy",
          image: "/assets/images/Malware Secrets.jpg",
        },
        {
          title: "Network Exploitation Basics",
          provider: "Udemy",
          image: "/assets/images/Network Explotions Basics.jpg",
        },
        {
          title: "AI Chatbot",
          provider: "Udemy",
          image: "/assets/images/Udemy AI CHATBOT.jpg",
        },
        {
          title: "Android Hacking",
          provider: "Udemy",
          image: "/assets/images/Udemy Android Hacking.jpg",
        },
        {
          title: "Anti Virus",
          provider: "Udemy",
          image: "/assets/images/Udemy Anti Virus.jpg",
        },
        {
          title: "Cyber Security: Secrets Exposed",
          provider: "Udemy",
          image: "/assets/images/Udemy Cyber-Security:Secret Exposed.jpg",
        },
        {
          title: "Hackers Toolkit",
          provider: "Udemy",
          image: "/assets/images/Udemy Hackers Toolkit.jpg",
        },
        {
          title: "Hacker Methodology",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethical Hacking: Hacker Methodology.jpg",
        },
        {
          title: "Ethically Hack the Planet Part 1",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethical Hacking Certificate.jpg",
        },
        {
          title: "Ethically Hack the Planet Part 2",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethiclly hacking Part 2.jpg",
        },
        {
          title: "Ethically Hack the Planet Part 3",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethical Hacking Part 3.jpg",
        },
        {
          title: "Ethically Hack the Planet Part 4",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethically Hacking Part 4.jpg",
        },
        {
          title: "Cyber Security: Web Enumeration",
          provider: "Udemy",
          image: "/assets/images/Udemy Cyber Security : Web Eneumeration.jpg",
        },
        {
          title: "Ethical Hacking: Crypto 101",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethical Hacking: Crypto 101.jpg",
        },
        {
          title: "Ethical Hacking: File Inclusion",
          provider: "Udemy",
          image: "/assets/images/Udemy Ethical Hacking : File Inclusion.jpg",
        },
        {
          title: "Hack Network Pc!",
          provider: "Udemy",
          image: "/assets/images/Udemy Hack that Network!.jpg",
        },
        {
          title: "Linux Desktop Automation",
          provider: "Udemy",
          image: "/assets/images/Udemy Linux Desktop Automation.jpg",
        },
        {
          title: "Network Mastery For Ethical Hacking",
          provider: "Udemy",
          image: "/assets/images/Udemy Network Mastery For Ethical Hacking.jpg",
        },
        {
          title: "Setup Ubuntu Server",
          provider: "Udemy",
          image: "/assets/images/Udemy Setup Ubuntu Server.jpg",
        },
        {
          title: "Windows Endpoint Security",
          provider: "Udemy",
          image: "/assets/images/Udemy Windows Endpoint Security.jpg",
        },
        {
          title: "Windows CMD Mastery",
          provider: "Udemy",
          image: "/assets/images/Windows CMD Mastery.jpg",
        },
        {
          title: "ReactJS",
          provider: "Udemy",
          image:
            "/assets/images/Udemy Complete ReactJs Course For Beginners.jpg",
        },
        {
          title: "React Crash Course with Mini Projects",
          provider: "Udemy",
          image:
            "/assets/images/Udemy React Crash Course with Mini Projects.jpg",
        },
        {
          title: "JavaScript",
          provider: "Udemy",
          image: "/assets/images/Udemy JS.jpg",
        },
        {
          title: "TypeScript",
          provider: "Udemy",
          image: "/assets/images/Udemy TypeScript for Beginners.jpg",
        },
        {
          title: "CSS & JavaScript",
          provider: "Udemy",
          image: "/assets/images/Udemy CSS,JS.jpg",
        },
        {
          title: "Css Certificate",
          provider: "Udemy",
          image: "/assets/images/Css Certificate.jpeg",
        },
        {
          title: "GitOps Certificate",
          provider: "The Linux Foundation",
          image: "/assets/images/GitOps certificate.jpg",
        },
      ];


const container = document.getElementById("cert-container");
const searchInput = document.getElementById("search");
const orgFilter = document.getElementById("org-filter");
const modal = document.getElementById("fullscreen-modal");
const modalImg = modal.querySelector("img");
const themeToggle = document.getElementById("theme-toggle");
const loadMoreBtn = document.getElementById("load-more");

let certsPerPage = 12;
let currentPage = 1;

// Populate filter dropdown
function populateFilters() {
  const orgs = [...new Set(CERTS.map((c) => c.provider))];
  orgFilter.innerHTML =
    '<option value="">All Orgs</option>' +
    orgs.map((o) => `<option value="${o}">${o}</option>`).join("");
}

// Render certificates (pagination, keeps JSON order)
function renderCerts() {
  const search = searchInput.value.toLowerCase();
  const org = orgFilter.value;
  let certs = [...CERTS];

  certs = certs.filter(
    (c) =>
      (!search ||
        c.title.toLowerCase().includes(search) ||
        c.provider.toLowerCase().includes(search)) &&
      (!org || c.provider === org)
  );

  const start = 0;
  const end = currentPage * certsPerPage;
  const visibleCerts = certs.slice(start, end);

  container.innerHTML = visibleCerts
    .map(
      (c, i) => `
    <div class="card" tabindex="0" aria-label="${c.title} certificate" onclick="openModal('${c.image}')" onkeydown="if(event.key==='Enter'){openModal('${c.image}')}" >
      <img src="${c.image}" alt="${c.title}" />
      <div class="card-content">
        <h3>${c.title}</h3>
        <p><strong>Org:</strong> ${c.provider}</p>
      </div>
    </div>
  `
    )
    .join("");

  loadMoreBtn.style.display = certs.length > end ? "block" : "none";
}

// Modal
window.openModal = function (src) {
  modalImg.src = src;
  modal.style.display = "flex";
  modal.focus();
};
modal.onclick = () => (modal.style.display = "none");

// Close modal on ESC key
document.addEventListener("keydown", function (e) {
  if (modal.style.display === "flex" && e.key === "Escape") {
    modal.style.display = "none";
  }
});

// Theme toggle
themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// Export / Import
document.getElementById("export").onclick = () => {
  const blob = new Blob([JSON.stringify(CERTS, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "certificates.json";
  a.click();
  URL.revokeObjectURL(url);
};
document.getElementById("import-btn").onclick = () =>
  document.getElementById("import").click();
document.getElementById("import").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    CERTS = JSON.parse(reader.result);
    populateFilters();
    renderCerts();
  };
  reader.readAsText(file);
};

// Load More
loadMoreBtn.onclick = () => {
  currentPage++;
  renderCerts();
};

// Events
searchInput.oninput = () => {
  currentPage = 1;
  renderCerts();
};
orgFilter.onchange = () => {
  currentPage = 1;
  renderCerts();
};

// Init
populateFilters();
renderCerts();