const images = {
            lissa: '../img/Lissa.png',
            chrom: '../img/Chrom.png',
            robin: '../img/Robin.png',
            robin_female: '../img/RobinF.png',
            lucina: '../img/lucina.png',
            cordelia: '../img/Cordelia.png',
            morgan_female: 'https://static.wikia.nocookie.net/fireemblem/images/0/09/Female_Morgan_FE13_Artwork.png/revision/latest/scale-to-width-down/203?cb=20161109031957',
            morgan_male: 'https://static.wikia.nocookie.net/fireemblem/images/9/97/Male_Morgan_FE13_Artwork.png/revision/latest/scale-to-width-down/126?cb=20161118044621',
            fredrick: 'https://static.wikia.nocookie.net/fireemblem/images/2/27/Frederik_Portrait.png/revision/latest/scale-to-width-down/250?cb=20161015064100',
            sumia: 'https://static.wikia.nocookie.net/fireemblem/images/5/5f/Sumia.png/revision/latest/scale-to-width-down/250?cb=20161009083936',
            olivia: 'https://static.wikia.nocookie.net/legendsofthemultiuniverse/images/9/99/3b0c41d05c6689bfa10ee7fd5901433e.png/revision/latest?cb=20220313172959',
            maribelle: 'https://static.wikia.nocookie.net/fireemblem/images/3/32/Maribelle_confession.png/revision/latest/scale-to-width-down/250?cb=20231223031002',
            frederick: 'https://static.wikia.nocookie.net/fireemblem/images/2/27/Frederik_Portrait.png/revision/latest/scale-to-width-down/250?cb=20161015064100',
            miriel: 'https://static.wikia.nocookie.net/fireemblem/images/b/b7/Miriel.png/revision/latest?cb=20160603023035',
            sully: 'https://static.wikia.nocookie.net/fireemblem/images/5/54/Sully_Portrait.png/revision/latest/scale-to-width-down/250?cb=20210424061604',
            cherche: 'https://static.wikia.nocookie.net/nintendo/images/c/c1/FEA_Cherche_Portrait.png/revision/latest/scale-to-width-down/250?cb=20171013014155&path-prefix=en',
            panne: 'https://static.wikia.nocookie.net/fireemblem/images/a/ac/Velvet_Portrait.png/revision/latest?cb=20160529042901',
            walhart: 'https://static.wikia.nocookie.net/fireemblem/images/3/3f/Walhart_portrait.png/revision/latest?cb=20151114034243',
            tharja: 'https://static.wikia.nocookie.net/p__/images/a/a7/TharjaPortrait_FE13.png/revision/latest?cb=20201130001543&path-prefix=protagonist',
            nowi: 'https://static.wikia.nocookie.net/fireemblem/images/1/15/Nono_Kakusei.png/revision/latest/scale-to-width-down/177?cb=20160503214051',
            morgan: 'https://static.wikia.nocookie.net/fireemblem/images/8/89/Morgan_%28FE13_Artwork%29.png/revision/latest/scale-to-width-down/1200?cb=20161120025538',
            cynthia: 'https://static.wikia.nocookie.net/fireemblem/images/3/37/Cynthia_Kakusei.png/revision/latest?cb=20160529044003',
            inigo: 'https://static.wikia.nocookie.net/fireemblem/images/8/8e/Inigo_Standard.png/revision/latest/scale-to-width-down/250?cb=20161015035930',
            owain: 'https://static.wikia.nocookie.net/heroes-villains/images/d/db/Owain.png/revision/latest?cb=20170402215433',
            brady:  'https://static.wikia.nocookie.net/fireemblem/images/c/c1/Brady_%28FE13_Artwork%29.png/revision/latest?cb=20160704214503',
            kjelle: 'https://static.wikia.nocookie.net/fireemblem/images/4/46/Dezel.png/revision/latest?cb=20160603023129',
            laurent: 'https://static.wikia.nocookie.net/fireemblem/images/d/d8/FE13_Laurent.png/revision/latest?cb=20160810082622',
            severa: 'https://static.wikia.nocookie.net/fireemblem/images/2/29/Severa.png/revision/latest?cb=20160420094019',
            gerome: 'https://static.wikia.nocookie.net/fireemblem/images/2/28/Gerome.png/revision/latest?cb=20160529043928',
            yarne: 'https://cdn.fireemblemwiki.org/thumb/2/2b/FEA_Yarne.png/1200px-FEA_Yarne.png',
            noire: 'https://cdn.fireemblemwiki.org/2/23/FEA_Noire.png',
            nah: 'https://static.wikia.nocookie.net/fireemblem/images/1/1c/Nah.png/revision/latest?cb=20160529044103'


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
            morgan_female: { name: 'Morgan', gender: 'female', skills: ['Aether', 'Galeforce', 'Tomefaire', 'Bond'] },
            morgan_male: { name: 'Morgan', gender: 'male', skills: ['Aether', 'Galeforce', 'Tomefaire', 'Bond'] },
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
            nowi: childRoster.nah
        };

        const familyLegend = [
            { child: 'Lucina', mother: 'Any eligible mother', father: 'Chrom' },
            { child: 'Female Morgan', mother: 'Any eligible mother', father: 'Male Robin' },
            { child: 'Male Morgan', mother: 'Female Robin', father: 'Any eligible father except Chrom' },
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

        function getChildForPair(mother, father) {
            if (father.id === 'chrom') {
                return childRoster.lucina;
            }

            if (mother.id === 'robin_female') {
                return childRoster.morgan_male;
            }

            if (father.id === 'robin') {
                return childRoster.morgan_female;
            }

            return motherChildMap[mother.id];
        }

        function getChildId(child) {
            return Object.entries(childRoster).find(([, rosterChild]) => rosterChild === child)?.[0];
        }

        function renderCharacterImage(character, role) {
            const imageSource = images[character.id];

            if (!imageSource) {
                return '';
            }

            return `
                <figure class="character-image-card">
                    <img src="${imageSource}" alt="${character.name}" class="character-image" width="150" height="200">
                    <figcaption>${role}: ${character.name}</figcaption>
                </figure>
            `;
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

            const child = getChildForPair(mother, father);

            if (!child) {
                result.innerHTML = `
                    <h2>No unique child assigned</h2>
                    <div class="character-images">${[
                        renderCharacterImage(mother, 'Mother'),
                        renderCharacterImage(father, 'Father')
                    ].join('')}</div>
                    <p><strong>Mother:</strong> ${mother.name} | <strong>Father:</strong> ${father.name}</p>
                    <p>This pairing does not have a unique child in the current database.</p>
                `;
                return;
            }

            const skillMarkup = child.skills.map((skill) => `<span class="skill">${skill}</span>`).join(', ');
            const childId = getChildId(child);
            const childImage = childId ? renderCharacterImage({ id: childId, name: child.name }, 'Child') : '';
            const genderMarkup = child.gender ? `<p><strong>Gender:</strong> ${child.gender}</p>` : '';
            const parentImages = [
                renderCharacterImage(mother, 'Mother'),
                renderCharacterImage(father, 'Father')
            ].join('');

            result.innerHTML = `
                <h2>${child.name}</h2>
                <div class="character-images">${parentImages}${childImage}</div>
                <p><strong>Mother:</strong> ${mother.name} | <strong>Father:</strong> ${father.name}</p>
                ${genderMarkup}
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
                        <td>${entry.father}</td>
                        <td>${entry.mother}</td>
                        <td>${entry.child}</td>
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