document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementsByName('formname')[0];
    let modal = document.getElementById('modal');
    let submit = document.getElementById('submit');
    let close = document.getElementById('Close');
    let tax = document.getElementById('tax-value');
    let reset=document.getElementById('reset');
  
    function calculatetax() {
      let gross = parseInt(document.getElementById('gross').value);
      let extra = parseInt(document.getElementById('extra').value);
      let age = parseInt(document.getElementById('age').value);
      let deductions = parseInt(document.getElementById('deductions').value);
  
      let taxmoney = gross + extra - deductions;
      let taxprice;
  
      if (taxmoney <= 800000) {
        taxprice = taxmoney;
      } else {
        if (age < 40) {
          taxprice = taxmoney-((taxmoney-800000) * 0.3);
        } else if (age >= 40 && age <= 59) {
          taxprice = taxmoney-((taxmoney-800000) * 0.4);
        } else if (age >= 60) {
          taxprice =taxmoney-((taxmoney-800000) * 0.10);
        }
      }
      return taxprice;
    }
    function showModal(event) {
      event.preventDefault();
  
      const inputs = [
          { id: 'gross', warningIndex: 0 },
          { id: 'extra', warningIndex: 1 },
          { id: 'age', warningIndex: 2 },
          { id: 'deductions', warningIndex: 3 }
      ];
  
      let valid = true;
  
      inputs.forEach(input => {
          const value = document.getElementById(input.id).value;
          const warningIcon = document.getElementsByClassName('warning-icon')[input.warningIndex];
  
          if (isNaN(value) || value === "" || value<=0) {
              warningIcon.style.display = 'inline';
              valid = false;
          } else {
              warningIcon.style.display = 'none';
          }
      });
  
      if (valid) {
          modal.style.display = "block";
          const show = calculatetax();
          if(show>=0){
          tax.textContent = "Rs "+show.toLocaleString();
          }else{
            tax.textContent="You are in debt of Rs " +Math.abs(show.toLocaleString());
          }
      } else {
          modal.style.display = "none";
      }
  }   
      let infomsg1=document.getElementById('infomsg1');
      let infomsg2=document.getElementById('infomsg2');
      let infomsg3=document.getElementById('infomsg3');
      let infomsg4=document.getElementById('infomsg4');

      info1.addEventListener('mouseenter',function(event){
        infomsg1.style.display='inline';
      });
      info1.addEventListener('mouseleave',function(event){
        infomsg1.style.display='none';
      });
      info2.addEventListener('mouseenter',function(event){
        infomsg2.style.display='inline';
      });
      info2.addEventListener('mouseleave',function(event){
        infomsg2.style.display='none';
      });
      info3.addEventListener('mouseenter',function(event){
        infomsg3.style.display='inline';
      });
      info3.addEventListener('mouseleave',function(event){
        infomsg3.style.display='none';
      });
      info4.addEventListener('mouseenter',function(event){
        infomsg4.style.display='inline';
      });
      info4.addEventListener('mouseleave',function(event){
        infomsg4.style.display='none';
      });
      // function hidewarning(){
      //   let warn=document.getElementsByClassName('warning-icon');
      //   warn.forEach(function(icon){
      //     icon.style.display='hidden';
      //   })
      // }
      
    function closeModal() {
      modal.style.display = "none";
    }
    // reset.addEventListener("click",hidewarning);
    submit.addEventListener("click", showModal);
    close.addEventListener("click", closeModal);
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });