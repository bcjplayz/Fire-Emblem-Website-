const images = {
            lissa: 'img/lissa.png',
            chrom: 'img/chrom.png',
            robin: 'img/robin.png',
            robin_female: 'img/robin_female.png',
            sumia: 'img/sumia.png',
            lucina: 'img/lucina.png',
            maribelle: 'img/maribelle.png',
            frederick: 'img/frederick.png',
            miriel: 'img/miriel.png',
            cordelia: 'img/cordelia.png',
            walhart: 'img/walhart.png',
            tharja: 'img/tharja.png'

}

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
                name: 'Male Robin',
                gender: 'male',
                class: 'Tactician',
                skills: ['Vantage', 'Aether', 'Tomefaire', 'Sol']
            },
            {
                id: 'robin_female',
                name: 'Female Robin',
                gender: 'female',
                class: 'Tactician',
                skills: ['Vantage', 'Aether', 'Tomefaire', 'Sol']
            },
            {
                id: 'lucina',
                name: 'Lucina',
                gender: 'female',
                class: 'Lord',
                skills: ['Dual Strike', 'Aether', 'Swordfaire', 'Bond']
            },
            {
                id: 'olivia',
                name: 'Olivia',
                gender: 'female',
                class: 'Pegasus Knight',
                skills: ['Galeforce', 'Lancefaire', 'Aegis', 'Charm']
            },
            {
                id: 'maribelle',
                name: 'Maribelle',
                gender: 'female',
                class: 'Troubadour',
                skills: ['Fortify', 'Pavise', 'Warding Blow', 'Heals']
            },
            {
                id: 'sully',
                name: 'Sully',
                gender: 'female',
                class: 'Knight',
                skills: ['Aegis', 'Pavise', 'Vantage', 'Defense +2']
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
                id: 'cherche',
                name: 'Cherche',
                gender: 'female',
                class: 'Wyvern Rider',
                skills: ['Galeforce', 'Lancefaire', 'Aegis', 'Charm']
            },
            {
                id: 'panne',
                name: 'Panne',
                gender: 'female',
                class: 'Taguel',
                skills: ['Aegis', 'Charm', 'Dual Support', 'Heals']
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
            },
            {
                id: 'nowi',
                name: 'Nowi',
                gender: 'female',
                class: 'Manakete',
                skills: ['Aether', 'Charm', 'Aegis', 'Heals']
            }
        ];

        const childRoster = {
            lucina: { name: 'Lucina', skills: ['Dual Strike', 'Aether', 'Swordfaire', 'Bond'] },
            morgan: { name: 'Morgan', skills: ['Aether', 'Galeforce', 'Tomefaire', 'Bond'] },
            owain: { name: 'Owain', skills: ['Aether', 'Vantage', 'Bond', 'Dark Magic +2'] },
            inigo: { name: 'Inigo', skills: ['Dual Strike', 'Aether', 'Swordfaire', 'Charm'] },
            brady: { name: 'Brady', skills: ['Aegis', 'Heals', 'Bond', 'Dual Support'] },
            kjelle: { name: 'Kjelle', skills: ['Pavise', 'Aegis', 'Defense +2', 'Bond'] },
            laurent: { name: 'Laurent', skills: ['Tomefaire', 'Sol', 'Aether', 'Magic +2'] },
            cynthia: { name: 'Cynthia', skills: ['Aether', 'Galeforce', 'Lancefaire', 'Bond'] },
            severa: { name: 'Severa', skills: ['Aegis', 'Lancefaire', 'Dual Strike', 'Charm'] },
            gerome: { name: 'Gerome', skills: ['Aegis', 'Lancefaire', 'Dual Strike', 'Pavise'] },
            yarne: { name: 'Yarne', skills: ['Dual Support', 'Aegis', 'Charm', 'Heals'] },
            noire: { name: 'Noire', skills: ['Tomefaire', 'Sol', 'Aether', 'Magic +2'] },
            nah: { name: 'Nah', skills: ['Heals', 'Charm', 'Aegis', 'Bond'] }
        };

        const motherChildMap = {
            lissa: childRoster.owain,
            olivia: childRoster.inigo,
            maribelle: childRoster.brady,
            sully: childRoster.kjelle,
            miriel: childRoster.laurent,
            sumia: childRoster.cynthia,
            cordelia: childRoster.severa,
            cherche: childRoster.gerome,
            panne: childRoster.yarne,
            tharja: childRoster.noire,
            nowi: childRoster.nah,
            robin_female: childRoster.lucina,
            lucina: childRoster.morgan
        };

        const specialChildren = {
            'chrom|robin_female': childRoster.lucina,
            'robin_female|chrom': childRoster.lucina,
            'robin|lucina': childRoster.morgan,
            'lucina|robin': childRoster.morgan
        };

        const familyLegend = [
            { child: 'Lucina', mother: 'Female Robin', father: 'Chrom' },
            { child: 'Morgan', mother: 'Lucina', father: 'Male Robin' },
            { child: 'Inigo', mother: 'Olivia', father: 'Any eligible father' },
            { child: 'Owain', mother: 'Lissa', father: 'Any eligible father' },
            { child: 'Brady', mother: 'Maribelle', father: 'Any eligible father' },
            { child: 'Kjelle', mother: 'Sully', father: 'Any eligible father' },
            { child: 'Laurent', mother: 'Miriel', father: 'Any eligible father' },
            { child: 'Cynthia', mother: 'Sumia', father: 'Any eligible father' },
            { child: 'Severa', mother: 'Cordelia', father: 'Any eligible father' },
            { child: 'Gerome', mother: 'Cherche', father: 'Any eligible father' },
            { child: 'Yarne', mother: 'Panne', father: 'Any eligible father' },
            { child: 'Noire', mother: 'Tharja', father: 'Any eligible father' },
            { child: 'Nah', mother: 'Nowi', father: 'Any eligible father' }
        ];

        const motherSelect = document.getElementById('motherSelect');
        const fatherSelect = document.getElementById('fatherSelect');
        const generateBtn = document.getElementById('generateBtn');
        const result = document.getElementById('result');
        const legendTableBody = document.getElementById('familyLegend')?.querySelector('tbody');

        if (!motherSelect || !fatherSelect || !generateBtn || !result) {
            throw new Error('Support page is missing required form elements.');
        }

        function isSiblingPair(motherId, fatherId) {
            return (motherId === 'chrom' && fatherId === 'lissa') || (motherId === 'lissa' && fatherId === 'chrom');
        }

        function isFatherDaughterPair(motherId, fatherId) {
            return (motherId === 'lucina' && fatherId === 'chrom') || (motherId === 'chrom' && fatherId === 'lucina');
        }

        function isInvalidParentPair(motherId, fatherId) {
            return !motherId || !fatherId || motherId === fatherId || isSiblingPair(motherId, fatherId) || isFatherDaughterPair(motherId, fatherId);
        }

        function populateSelects() {
            if (!motherSelect || !fatherSelect) {
                return;
            }

            const mothers = characters.filter((character) => character.gender === 'female');
            const fathers = characters.filter((character) => character.gender === 'male');

            motherSelect.innerHTML = '';
            fatherSelect.innerHTML = '';

            mothers.forEach((character) => {
                const motherOption = document.createElement('option');
                motherOption.value = character.id;
                motherOption.textContent = character.name;
                motherSelect.appendChild(motherOption);
            });

            fathers.forEach((character) => {
                const fatherOption = document.createElement('option');
                fatherOption.value = character.id;
                fatherOption.textContent = character.name;
                fatherSelect.appendChild(fatherOption);
            });

            motherSelect.value = 'robin_female';
            fatherSelect.value = 'chrom';
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

        function mergeSkills(mother, father) {
            const combined = [...new Set([...mother.skills, ...father.skills])];
            return combined.slice(0, 5);
        }

        function generateChild() {
            if (!enforceValidParents()) {
                return;
            }

            const mother = getCharacterById(motherSelect.value);
            const father = getCharacterById(fatherSelect.value);

            if (!mother || !father) {
                result.innerHTML = '<p>Choose valid mother and father selections.</p>';
                return;
            }

            const exactMatch = specialChildren[`${mother.id}|${father.id}`] || specialChildren[`${father.id}|${mother.id}`] || motherChildMap[mother.id];
            const child = exactMatch || {
                name: `${mother.name} & ${father.name}'s Child`,
                skills: mergeSkills(mother, father)
            };

            const skillMarkup = child.skills.map((skill) => `<span class="skill">${skill}</span>`).join(', ');

            result.innerHTML = `
                <h2>${child.name}</h2>
                <p><strong>Mother:</strong> ${mother.name} | <strong>Father:</strong> ${father.name}</p>
                <p><strong>Abilities:</strong> ${skillMarkup}</p>
            `;
        }

        function initSupportPage() {
            if (!motherSelect || !fatherSelect || !generateBtn || !result) {
                return;
            }

            if (legendTableBody) {
                legendTableBody.innerHTML = familyLegend.map((entry) => `
                    <tr>
                        <td>${entry.child}</td>
                        <td>${entry.mother}</td>
                        <td>${entry.father}</td>
                    </tr>
                `).join('');
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