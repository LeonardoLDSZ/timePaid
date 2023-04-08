document.addEventListener('DOMContentLoaded', function() {
  var calcularBtn = document.getElementById('calcular');
  var gerarPdfBtn = document.getElementById('gerar-pdf');

  calcularBtn.addEventListener('click', function() {
    var data = document.getElementById('data').value;
    var horas = parseFloat(document.getElementById('horas').value);
    var preco = parseFloat(document.getElementById('preco').value);
    var servico = document.getElementById('servico').value;
    var solicitante = document.getElementById('solicitante').value;

    if (data == '' || horas == '' || preco == '' || servico == '' || solicitante == '') {
      toastr.error('Por favor, preencha todos os campos.');
    } else {
      var total = preco * horas;
      document.getElementById('resultado').innerHTML = 'Valor total do serviço:   R$ ' + total.toFixed(2);
    }
    $('#gerar-pdf').prop('disabled', false);   
  });
  
  gerarPdfBtn.addEventListener('click', function() {
    var data = document.getElementById('data').value;
    var horas = parseFloat(document.getElementById('horas').value);
    var preco = parseFloat(document.getElementById('preco').value);
    var servico = document.getElementById('servico').value;
    var solicitante = document.getElementById('solicitante').value;

    if (data == '' || horas == '' || preco == '' || servico == '' || solicitante == '') {
      toastr.error('Por favor, preencha todos os campos.');
    } else {
      var total = preco * horas;
      var doc = new jsPDF();            
      
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor('#333');
      doc.text('Detalhes do Serviço', 105, 20, null, null, 'center');
      doc.setLineWidth(0.5);
      doc.line(20, 30, 190, 30);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text('Data:', 20, 50);
      doc.text(data, 140, 50);
      doc.text('Número de horas necessárias:', 20, 60);
      doc.text(horas.toString(), 140, 60);
      doc.text('Preço da hora:', 20, 70);
      doc.text('R$ ' + preco.toFixed(2), 140, 70);
      doc.text('Serviço realizado:', 20, 80);
      doc.text(servico, 140, 80);
      doc.text('Solicitante:', 20, 90);
      doc.text(solicitante, 140, 90);
      doc.text('Valor total do serviço:', 20, 100);
      doc.text('R$ ' + total.toFixed(2), 140, 100);    
      doc.text("_______________________", 70, 200);
      doc.setFontSize(20);
      doc.text("Prestador", 88, 210);
      doc.save('detalhes_servico.pdf');      
    }
  });
});