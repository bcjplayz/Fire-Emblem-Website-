const characters = [
            {
                id: 'lissa',
                name: 'Lissa',
                gender: 'female',
                class: 'Cleric',
                skills: ['Heals', 'Relief', 'Aegis', 'Bond']
            },
            {
                id: 'chrom',
                name: 'Chrom',
                gender: 'male',
                class: 'Lord',
                skills: ['Aether', 'Dual Strike', 'Def +2', 'Charm']
            },
            {
                id: 'sumia',
                name: 'Sumia',
                gender: 'female',
                class: 'Pegasus Knight',
                skills: ['Darting Blow', 'Tomefaire', 'Aegis', 'Lancefaire']
            },
            {
                id: 'robin',
                name: 'Robin',
                gender: 'male',
                class: 'Tactician',
                skills: ['Vantage', 'Aether', 'Tomefaire', 'Sol']
            },
            {
                id: 'maribelle',
                name: 'Maribelle',
                gender: 'female',
                class: 'Troubadour',
                skills: ['Fortify', 'Pavise', 'Warding Blow', 'Heals']
            },
            {
                id: 'frederick',
                name: 'Frederick',
                gender: 'male',
                class: 'Knight',
                skills: ['Aegis', 'Pavise', 'Vantage', 'Defense +2']
            },
            {
                id: 'miriel',
                name: 'Miriel',
                gender: 'female',
                class: 'Mage',
                skills: ['Magic +2', 'Tomefaire', 'Aether', 'Vantage']
            },
            {
                id: 'cordelia',
                name: 'Cordelia',
                gender: 'female',
                class: 'Pegasus Knight',
                skills: ['Galeforce', 'Lancefaire', 'Aegis', 'Charm']
            },
            {
                id: 'walhart',
                name: 'Walhart',
                gender: 'male',
                class: 'Great Knight',
                skills: ['Aether', 'Luna', 'Pavise', 'Strength +2']
            },
            {
                id: 'tharja',
                name: 'Tharja',
                gender: 'female',
                class: 'Dark Mage',
                skills: ['Hex', 'Aegis', 'Vengeance', 'Dark Magic +2']
            }
        ];

        const knownChildren = {
            'lissa|chrom': { name: 'Lucina', skills: ['Dual Strike', 'Aether', 'Swordfaire', 'Bond'] },
            'chrom|lissa': { name: 'Lucina', skills: ['Dual Strike', 'Aether', 'Swordfaire', 'Bond'] },
            'sumia|chrom': { name: 'Morgan', skills: ['Aether', 'Galeforce', 'Tomefaire', 'Bond'] },
            'chrom|sumia': { name: 'Morgan', skills: ['Aether', 'Galeforce', 'Tomefaire', 'Bond'] },
            'maribelle|chrom': { name: 'Yarne', skills: ['Dual Support', 'Aegis', 'Charm', 'Heals'] },
            'chrom|maribelle': { name: 'Yarne', skills: ['Dual Support', 'Aegis', 'Charm', 'Heals'] },
            'miriel|robin': { name: 'Noire', skills: ['Tomefaire', 'Sol', 'Aether', 'Magic +2'] },
            'robin|miriel': { name: 'Noire', skills: ['Tomefaire', 'Sol', 'Aether', 'Magic +2'] },
            'cordelia|walhart': { name: 'Gerome', skills: ['Aegis', 'Lancefaire', 'Dual Strike', 'Pavise'] },
            'walhart|cordelia': { name: 'Gerome', skills: ['Aegis', 'Lancefaire', 'Dual Strike', 'Pavise'] },
            'tharja|frederick': { name: 'Owain', skills: ['Aether', 'Vantage', 'Bond', 'Dark Magic +2'] },
            'frederick|tharja': { name: 'Owain', skills: ['Aether', 'Vantage', 'Bond', 'Dark Magic +2'] }
        };

        const motherSelect = document.getElementById('motherSelect');
        const fatherSelect = document.getElementById('fatherSelect');
        const supportRankSelect = document.getElementById('supportRank');
        const generateBtn = document.getElementById('generateBtn');
        const result = document.getElementById('result');

        if (!motherSelect || !fatherSelect || !generateBtn || !result) {
            throw new Error('Support page is missing required form elements.');
        }

        function isInvalidParentPair(motherId, fatherId) {
            return !motherId || !fatherId || motherId === fatherId;
        }

        function populateSelects() {
            if (!motherSelect || !fatherSelect) {
                return;
            }

            motherSelect.innerHTML = '';
            fatherSelect.innerHTML = '';

            characters.forEach((character) => {
                const motherOption = document.createElement('option');
                motherOption.value = character.id;
                motherOption.textContent = character.name;
                motherSelect.appendChild(motherOption);

                const fatherOption = document.createElement('option');
                fatherOption.value = character.id;
                fatherOption.textContent = character.name;
                fatherSelect.appendChild(fatherOption);
            });

            motherSelect.value = 'lissa';
            fatherSelect.value = 'chrom';
            if (supportRankSelect) {
                supportRankSelect.value = 'C';
            }
        }

        function enforceValidParents() {
            if (!isInvalidParentPair(motherSelect.value, fatherSelect.value)) {
                return true;
            }

            result.innerHTML = '<p>Please choose two different parents before generating a child.</p>';
            return false;
        }

        function getCharacterById(id) {
            return characters.find((character) => character.id === id);
        }

        function mergeSkills(mother, father, rank) {
            const rankBonus = {
                C: ['Bond'],
                B: ['Aegis'],
                A: ['Vantage'],
                S: ['Aether']
            };

            const combined = [...new Set([...mother.skills, ...father.skills, ...(rankBonus[rank] || [])])];
            return combined.slice(0, 5);
        }

        function generateChild() {
            if (!enforceValidParents()) {
                return;
            }

            const mother = getCharacterById(motherSelect.value);
            const father = getCharacterById(fatherSelect.value);
            const rank = supportRankSelect ? supportRankSelect.value : 'C';

            if (!mother || !father) {
                result.innerHTML = '<p>Choose valid mother and father selections.</p>';
                return;
            }

            const exactMatch = knownChildren[`${mother.id}|${father.id}`] || knownChildren[`${father.id}|${mother.id}`];

            const child = exactMatch || {
                name: `${mother.name} & ${father.name}'s Child`,
                skills: mergeSkills(mother, father, rank)
            };

            const skillMarkup = child.skills.map((skill) => `<span class="skill">${skill}</span>`).join(', ');

            result.innerHTML = `
                <h2>${child.name}</h2>
                <p><strong>Mother:</strong> ${mother.name} | <strong>Father:</strong> ${father.name}</p>
                <p><strong>Support Rank:</strong> ${rank}</p>
                <p><strong>Abilities:</strong> ${skillMarkup}</p>
            `;
        }

        function initSupportPage() {
            if (!motherSelect || !fatherSelect || !generateBtn || !result) {
                return;
            }

            populateSelects();
            motherSelect.addEventListener('change', enforceValidParents);
            fatherSelect.addEventListener('change', enforceValidParents);
            generateBtn.addEventListener('click', generateChild);
            generateChild();
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSupportPage);
        } else {
            initSupportPage();
        }