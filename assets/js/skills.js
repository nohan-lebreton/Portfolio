const skills = [
    { compétence: 'javascript', autoévaluation: 'avancé' },
    { compétence: 'HTML/CSS', autoévaluation: 'avancé' },
    { compétence: 'Bootstrap', autoévaluation: 'expert' },
    { compétence: 'PHP', autoévaluation: 'intermédiaire' },
    { compétence: 'MySQL', autoévaluation: 'intermédiaire' },
    { compétence: 'Python', autoévaluation: 'avancé' },
    { compétence: 'Java', autoévaluation: 'intermédiaire' },
    { compétence: 'Trello', autoévaluation: 'intermédiaire' },
    { compétence: 'LaTex', autoévaluation: 'expert' },
    { compétence: 'ReactJs', autoévaluation: 'débutant' },
    { compétence: 'ReactJs', autoévaluation: 'débutant' },
    { compétence: 'MongoDB', autoévaluation: 'débutant' },
    { compétence: 'MongoDB', autoévaluation: 'débutant' }
  ];
  
  const table = document.createElement('table');
  table.className = 'table';
  
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.textContent = '#';
  const th2 = document.createElement('th');
  th2.textContent = 'Compétences';
  const th3 = document.createElement('th');
  th3.textContent = 'Auto-évaluation';
  
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);
  table.appendChild(thead);
  
  const tbody = document.createElement('tbody');
  
  function populateTable(filter) {
    tbody.innerHTML = '';
  
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
  
      if (
        filter === '' ||
        skill.compétence.toLowerCase().includes(filter.toLowerCase()) ||
        skill.autoévaluation.toLowerCase().includes(filter.toLowerCase())
      ) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = i + 1;
  
        const td1 = document.createElement('td');
        td1.textContent = skill.compétence;
  
        const td2 = document.createElement('td');
        td2.textContent = skill.autoévaluation;
  
        row.appendChild(th);
        row.appendChild(td1);
        row.appendChild(td2);
  
        tbody.appendChild(row);
      }
    }
  }
  
  table.appendChild(tbody);
  
  const section = document.getElementById('skills');
  section.appendChild(table);
  
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Rechercher compétences');
  section.insertBefore(searchInput, table);
  
  searchInput.addEventListener('input', function(event) {
    const filter = event.target.value;
    populateTable(filter);
  });
  
  populateTable('');