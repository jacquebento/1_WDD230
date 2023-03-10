const url = 'https://jacquebento.github.io/1_WDD230/chamber/data/members.json';
const giturl = "https://jacquebento.github.io/1_WDD230/"

const spotlights = document.querySelector('#spotlights');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    data.members.sort(() => Math.random() - 0.5);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    var n = 0;
    members.forEach((member) => {

            if ((member.membLevel === "Golden" || member.membLevel === "Silver") && n < 3){
                n = n + 1;
                let card = document.createElement('section');
                card.className = "members";
                let logo = document.createElement('img');
                logo.className = "logo";
                let name = document.createElement('h2'); 
                let address = document.createElement('h3');
                let phone = document.createElement('h3');
                let website = document.createElement('h3');
                
                name.textContent = `${member.name}`; 
                address.textContent = `Address: ${member.address}`;
                phone.textContent = `Phone: ${member.phone}`;
                website.textContent = `Website: ${member.website}`;
                
                logo.setAttribute('src', member.logo);
                logo.setAttribute('alt', `Logo of ${member.name}`);
                logo.setAttribute('loading', 'lazy');
                logo.setAttribute('width', '340');
                logo.setAttribute('height', '440');
            
                
                card.appendChild(name); 
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(website);
                card.appendChild(logo);
            
                spotlights.appendChild(card);
            }          
    }); 
  }

getMembersData();


