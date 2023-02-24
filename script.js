function calculate() {
    const hours = document.getElementById("hours").value;
    const rate = document.getElementById("rate").value;
    const description = document.getElementById("description").value;
    const client = document.getElementById("client").value;
  
    const total = hours * rate;
  
    document.getElementById("result").innerHTML = `
      <h2>Resumo do serviço</h2>
      <p><strong>Horas trabalhadas:</strong> ${hours}</p>
      <p><strong>Taxa horária:</strong> R$ ${rate}</p>
      <p><strong>Descrição do serviço:</strong> ${description}</p>
      <p><strong>Empresa:</strong> ${client}</p>
      <p><strong>Total a ser cobrado:</strong> R$ ${total.toFixed(2)}</p>
    `;
  }
  
  function generatePDF() {
    const hours = document.getElementById("hours").value;
    const rate = document.getElementById("rate").value;
    const description = document.getElementById("description").value;
    const client = document.getElementById("client").value;
  
    const total = hours * rate;
  
    const doc = new jsPDF();
    doc.text(`Resumo do serviço`, 10, 10);
    doc.text(`Horas trabalhadas: ${hours}`, 10, 20);
    doc.text(`Taxa horária: R$ ${rate}`, 10, 30);
    doc.text(`Descrição do serviço: ${description}`, 10, 40);
    
  }