// Sample drug database
const drugs = [
    {
        id: 1,
        name: "Amoxicillin",
        class: "Penicillin Antibiotic",
        uses: "Bacterial infections (ear, nose, throat, skin, urinary tract)",
        sideEffects: "Nausea, diarrhea, rash, allergic reactions",
        interactions: [
            { drug: "Warfarin", severity: "warning" },
            { drug: "Methotrexate", severity: "warning" },
            { drug: "Oral Contraceptives", severity: "info" }
        ],
        dosage: "250-500mg every 8 hours",
        letter: "A"
    },
    {
        id: 2,
        name: "Atorvastatin",
        class: "Statin (Cholesterol Medication)",
        uses: "High cholesterol, prevention of cardiovascular disease",
        sideEffects: "Muscle pain, headache, nausea, liver problems",
        interactions: [
            { drug: "Grapefruit", severity: "warning" },
            { drug: "Cyclosporine", severity: "warning" },
            { drug: "Digoxin", severity: "info" }
        ],
        dosage: "10-80mg once daily",
        letter: "A"
    },
    {
        id: 3,
        name: "Aspirin",
        class: "NSAID / Antiplatelet",
        uses: "Pain relief, fever reduction, prevention of heart attacks",
        sideEffects: "Heartburn, stomach upset, bleeding risk, tinnitus",
        interactions: [
            { drug: "Warfarin", severity: "warning" },
            { drug: "Ibuprofen", severity: "warning" },
            { drug: "Corticosteroids", severity: "info" }
        ],
        dosage: "75-325mg once daily for prevention",
        letter: "A"
    },
    {
        id: 4,
        name: "Lisinopril",
        class: "ACE Inhibitor",
        uses: "High blood pressure, heart failure",
        sideEffects: "Cough, dizziness, headache, hyperkalemia",
        interactions: [
            { drug: "Diuretics", severity: "warning" },
            { drug: "NSAIDs", severity: "warning" },
            { drug: "Lithium", severity: "danger" }
        ],
        dosage: "10-40mg once daily",
        letter: "L"
    },
    {
        id: 5,
        name: "Metformin",
        class: "Biguanide Antidiabetic",
        uses: "Type 2 diabetes management",
        sideEffects: "Nausea, diarrhea, abdominal discomfort",
        interactions: [
            { drug: "Alcohol", severity: "danger" },
            { drug: "Iodinated contrast", severity: "warning" },
            { drug: "Cimetidine", severity: "info" }
        ],
        dosage: "500-2000mg daily in divided doses",
        letter: "M"
    },
    {
        id: 6,
        name: "Omeprazole",
        class: "Proton Pump Inhibitor",
        uses: "GERD, ulcers, Zollinger-Ellison syndrome",
        sideEffects: "Headache, abdominal pain, diarrhea",
        interactions: [
            { drug: "Clopidogrel", severity: "warning" },
            { drug: "Diazepam", severity: "info" },
            { drug: "Warfarin", severity: "warning" }
        ],
        dosage: "20-40mg once daily",
        letter: "O"
    },
    {
        id: 7,
        name: "Sertraline",
        class: "SSRI Antidepressant",
        uses: "Depression, anxiety disorders, OCD",
        sideEffects: "Nausea, insomnia, sexual dysfunction",
        interactions: [
            { drug: "MAO inhibitors", severity: "danger" },
            { drug: "NSAIDs", severity: "warning" },
            { drug: "Triptans", severity: "warning" }
        ],
        dosage: "50-200mg once daily",
        letter: "S"
    },
    {
        id: 8,
        name: "Warfarin",
        class: "Anticoagulant",
        uses: "Prevention of blood clots, stroke prevention",
        sideEffects: "Bleeding, bruising, tissue necrosis",
        interactions: [
            { drug: "Aspirin", severity: "danger" },
            { drug: "Vitamin K", severity: "warning" },
            { drug: "Antibiotics", severity: "warning" }
        ],
        dosage: "Individualized based on INR monitoring",
        letter: "W"
    }
];

// Sample health tips
const healthTips = [
    {
        title: "Heart Health",
        icon: "fas fa-heart",
        content: "Regular exercise, a balanced diet low in saturated fats, and managing stress can significantly reduce your risk of heart disease. Aim for 150 minutes of moderate exercise weekly."
    },
    {
        title: "Nutrition Tips",
        icon: "fas fa-apple-alt",
        content: "Incorporate more fruits, vegetables, and whole grains into your diet. Limit processed foods and added sugars. Stay hydrated with water throughout the day."
    },
    {
        title: "Sleep Hygiene",
        icon: "fas fa-bed",
        content: "Maintain a consistent sleep schedule, create a restful environment, and avoid screens before bedtime. Adults need 7-9 hours of quality sleep per night."
    },
    {
        title: "Mental Wellness",
        icon: "fas fa-brain",
        content: "Practice mindfulness, maintain social connections, and seek professional help when needed. Mental health is as important as physical health."
    },
    {
        title: "Medication Safety",
        icon: "fas fa-pills",
        content: "Always take medications as prescribed, store them properly, and be aware of potential interactions. Never share prescription medications with others."
    },
    {
        title: "Exercise Benefits",
        icon: "fas fa-running",
        content: "Regular physical activity boosts mood, improves cardiovascular health, and helps maintain a healthy weight. Find activities you enjoy to stay consistent."
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchBtn = document.getElementById('searchBtn');
const drugsGrid = document.querySelector('#home-tab .drug-grid');
const drugsListContainer = document.getElementById('drugs-list-container');
const healthTipsContainer = document.getElementById('health-tips-container');
const dosageGuidesContainer = document.getElementById('dosage-guides-container');
const drugDetailModal = document.getElementById('drugDetailModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Initialize the page
function initPage() {
    renderFeaturedDrugs();
    renderDrugsList();
    renderHealthTips();
    renderDosageGuides();
}

// Render featured drugs on home page
function renderFeaturedDrugs() {
    drugsGrid.innerHTML = '';
    
    // Get first 3 drugs for featured section
    const featuredDrugs = drugs.slice(0, 3);
    
    featuredDrugs.forEach(drug => {
        const drugCard = createDrugCard(drug);
        drugsGrid.appendChild(drugCard);
    });
}

// Create drug card element
function createDrugCard(drug) {
    const card = document.createElement('div');
    card.className = 'drug-card';
    card.innerHTML = `
        <div class="drug-header">
            <div class="drug-name">${drug.name}</div>
            <div class="drug-class">${drug.class}</div>
            <div class="pill-img">
                <i class="fas fa-pills"></i>
            </div>
        </div>
        <div class="drug-body">
            <div class="drug-info">
                <div class="info-label"><i class="fas fa-stethoscope"></i> Used For</div>
                <div>${drug.uses}</div>
            </div>
            <div class="drug-info">
                <div class="info-label"><i class="fas fa-exclamation-circle"></i> Common Side Effects</div>
                <div>${drug.sideEffects}</div>
            </div>
            <div class="drug-info">
                <div class="info-label"><i class="fas fa-handshake"></i> Interactions</div>
                <div class="interactions">
                    ${drug.interactions.map(interaction => 
                        `<span class="interaction-tag ${interaction.severity}">
                            <i class="fas fa-exclamation-triangle"></i> ${interaction.drug}
                        </span>`
                    ).join('')}
                </div>
            </div>
        </div>
        <div class="drug-footer">
            <button class="btn btn-outline"><i class="far fa-heart"></i> Save</button>
            <button class="btn btn-primary view-details" data-id="${drug.id}">
                <i class="fas fa-info-circle"></i> Details
            </button>
        </div>
    `;
    return card;
}

// Render drugs list for A-Z page
function renderDrugsList() {
    // Group drugs by first letter
    const drugsByLetter = {};
    drugs.forEach(drug => {
        const letter = drug.letter;
        if (!drugsByLetter[letter]) {
            drugsByLetter[letter] = [];
        }
        drugsByLetter[letter].push(drug);
    });
    
    // Sort letters alphabetically
    const sortedLetters = Object.keys(drugsByLetter).sort();
    
    let html = '';
    
    sortedLetters.forEach(letter => {
        html += `
            <div class="section-header">
                <div class="drug-letter">${letter}</div>
                <div class="letter-count">${drugsByLetter[letter].length} drugs</div>
            </div>
            <ul class="drug-list">
                ${drugsByLetter[letter].map(drug => `
                    <li>
                        <div>
                            <strong>${drug.name}</strong>
                            <div>${drug.class}</div>
                        </div>
                        <button class="btn btn-primary view-details" data-id="${drug.id}">
                            View Details
                        </button>
                    </li>
                `).join('')}
            </ul>
        `;
    });
    
    drugsListContainer.innerHTML = html;
}

// Render health tips
function renderHealthTips() {
    let html = '';
    
    healthTips.forEach(tip => {
        html += `
            <div class="health-tip">
                <h3><i class="${tip.icon}"></i> ${tip.title}</h3>
                <p>${tip.content}</p>
            </div>
        `;
    });
    
    healthTipsContainer.innerHTML = html;
}

// Render dosage guides
function renderDosageGuides() {
    // Get 3 random drugs for dosage guides
    const dosageDrugs = [...drugs].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let html = `
        <div class="drug-card" style="max-width: 800px; margin: 0 auto 30px;">
            <div class="drug-header">
                <div class="drug-name">Common Dosage Guides</div>
                <div class="drug-class">Important Medication Information</div>
            </div>
            <div class="drug-body">
                <p>Below are dosage guides for commonly prescribed medications. Always follow your healthcare provider's instructions.</p>
            </div>
        </div>
    `;
    
    html += '<div class="drug-grid">';
    
    dosageDrugs.forEach(drug => {
        html += `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-capsules"></i>
                </div>
                <h3 class="feature-title">${drug.name}</h3>
                <p class="feature-text">${drug.dosage}</p>
                <button class="btn btn-outline view-details" data-id="${drug.id}" style="margin-top: 15px;">
                    More Information
                </button>
            </div>
        `;
    });
    
    html += '</div>';
    
    dosageGuidesContainer.innerHTML = html;
}

// Show drug details in modal
function showDrugDetails(drugId) {
    const drug = drugs.find(d => d.id === drugId);
    
    if (!drug) return;
    
    modalContent.innerHTML = `
        <div class="drug-header">
            <div class="drug-name">${drug.name}</div>
            <div class="drug-class">${drug.class}</div>
            <div class="pill-img">
                <i class="fas fa-pills"></i>
            </div>
        </div>
        
        <div class="drug-body">
            <div class="drug-stats">
                <div class="stat-card">
                    <h4><i class="fas fa-stethoscope"></i> Uses</h4>
                    <p>${drug.uses}</p>
                </div>
                <div class="stat-card">
                    <h4><i class="fas fa-exclamation-circle"></i> Side Effects</h4>
                    <p>${drug.sideEffects}</p>
                </div>
                <div class="stat-card">
                    <h4><i class="fas fa-capsules"></i> Dosage</h4>
                    <p>${drug.dosage}</p>
                </div>
            </div>
            
            <div class="drug-info">
                <div class="info-label"><i class="fas fa-handshake"></i> Interactions</div>
                <div class="interactions">
                    ${drug.interactions.map(interaction => 
                        `<span class="interaction-tag ${interaction.severity}">
                            <i class="fas fa-exclamation-triangle"></i> ${interaction.drug}
                        </span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="drug-info">
                <div class="info-label"><i class="fas fa-file-medical"></i> Additional Information</div>
                <p>This medication should be stored at room temperature away from moisture and heat. Do not use after the expiration date printed on the label.</p>
                <p>If you miss a dose, take it as soon as you remember. If it is almost time for your next dose, skip the missed dose and continue with your regular schedule.</p>
            </div>
        </div>
        
        <div class="drug-footer">
            <button class="btn btn-outline"><i class="far fa-heart"></i> Save</button>
            <button class="btn btn-primary" onclick="window.print()">
                <i class="fas fa-print"></i> Print Information
            </button>
        </div>
    `;
    
    drugDetailModal.style.display = 'flex';
}

// Search functionality
function searchDrugs(query) {
    if (!query) {
        searchResults.style.display = 'none';
        return;
    }
    
    const results = drugs.filter(drug => 
        drug.name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="drug-item">No medications found</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    searchResults.innerHTML = results.map(drug => `
        <div class="drug-item" data-id="${drug.id}">
            <strong>${drug.name}</strong> - ${drug.class}
        </div>
    `).join('');
    
    searchResults.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initPage();
    
    // Mobile menu toggle
    document.getElementById('menuBtn').addEventListener('click', function() {
        document.getElementById('mainNav').classList.toggle('show');
    });
    
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show active tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === ${tabId}-tab) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Search input events
    searchInput.addEventListener('input', () => {
        searchDrugs(searchInput.value);
    });
    
    searchBtn.addEventListener('click', () => {
        searchDrugs(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchDrugs(searchInput.value);
        }
    });
    
    // Click on search results
    searchResults.addEventListener('click', (e) => {
        if (e.target.classList.contains('drug-item')) {
            const drugId = parseInt(e.target.getAttribute('data-id'));
            showDrugDetails(drugId);
            searchResults.style.display = 'none';
            searchInput.value = '';
        }
    });
    
    // Click outside search results to close
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) {
            searchResults.style.display = 'none';
        }
    });
    
    // View drug details
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const drugId = parseInt(e.target.getAttribute('data-id'));
            showDrugDetails(drugId);
        }
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        drugDetailModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    drugDetailModal.addEventListener('click', (e) => {
        if (e.target === drugDetailModal) {
            drugDetailModal.style.display = 'none';
        }
    });
});