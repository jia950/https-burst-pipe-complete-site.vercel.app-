document.addEventListener('DOMContentLoaded',()=>{
 // Ringba click-to-call CTA: keep the existing assigned tracking number.
 const ringbaPhone = '+12245240772';
 const displayPhone = '+1 (224) 524-0772';
 const navLinks = document.querySelector('.nav-links');
 if (navLinks && !navLinks.querySelector('.nav-call-cta')) {
   const callLink = document.createElement('a');
   callLink.className = 'btn nav-call-cta';
   callLink.href = 'tel:' + ringbaPhone;
   callLink.setAttribute('aria-label', 'Call plumbing help at ' + displayPhone);
   callLink.textContent = '☎ Call Now';
   const requestLink = navLinks.querySelector('.nav-cta');
   if (requestLink) requestLink.insertAdjacentElement('beforebegin', callLink);
   else navLinks.appendChild(callLink);
 }
 if (!document.querySelector('.sticky-call-mobile')) {
   const stickyCall = document.createElement('a');
   stickyCall.className = 'sticky-call-mobile';
   stickyCall.href = 'tel:' + ringbaPhone;
   stickyCall.setAttribute('aria-label', 'Call plumbing help at ' + displayPhone);
   stickyCall.innerHTML = '<span aria-hidden="true">☎</span><span>CALL NOW · ' + displayPhone + '</span>';
   document.body.appendChild(stickyCall);
 }

 const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav-links');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
 document.querySelectorAll('.nav-group>button').forEach(btn=>btn.addEventListener('click',()=>{if(window.matchMedia('(max-width:900px)').matches){const g=btn.closest('.nav-group');g.classList.toggle('expanded');btn.setAttribute('aria-expanded',String(g.classList.contains('expanded')));}}));
 const form=document.querySelector('[data-demo-form]'); if(form){form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('[data-form-message]');if(msg)msg.textContent='This sample form is not connected yet. Before publishing, connect it to your email or a form service and add your correct contact details.';});}
});