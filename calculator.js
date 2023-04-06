$(function() {
  $('button[type="button"]').click(function() {
      var horas = parseFloat($('#horas').val());
      var preco = parseFloat($('#preco').val());
      var servico = $('#servico').val();
      var empresa = $('#empresa').val();

      if (!horas || !preco || !servico || !empresa) {
        toastr.error('Por favor, preencha todos os campos antes de gerar o PDF.');
        return;
    }

      var total = horas * preco;

      $('#resultado').text('O valor total do serviço é R$ ' + total.toFixed(2));

      var doc = new jsPDF();
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor('#333');
      doc.text('Detalhes do Serviço', 105, 20, null, null, 'center');
      doc.setLineWidth(0.5);
      doc.line(20, 30, 190, 30);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text('Número de horas trabalhadas:', 20, 50);
      doc.text(horas.toString(), 140, 50);
      doc.text('Preço da hora:', 20, 60);
      doc.text('R$ ' + preco.toFixed(2), 140, 60);
      doc.text('Serviço realizado:', 20, 70);
      doc.text(servico, 140, 70);
      doc.text('Empresa:', 20, 80);
      doc.text(empresa, 140, 80);
      doc.text('Valor total do serviço:', 20, 90);
      doc.text('R$ ' + total.toFixed(2), 140, 90);
      doc.save('detalhes_servico.pdf');
  });
});