$(document).ready(function() {
  $('#calcular').click(function() {
      var horas = $('#horas').val();
      var preco = $('#preco').val();
      var servico = $('#servico').val();
      var empresa = $('#empresa').val();

      var total = horas * preco;

      $('#resultado').text('O valor total do serviço é R$ ' + total.toFixed(2));

      var doc = new jsPDF();
      doc.text('Número de horas trabalhadas: ' + horas, 10, 10);
      doc.text('Preço da hora: R$ ' + preco, 10, 20);
      doc.text('Serviço realizado: ' + servico, 10, 30);
      doc.text('Empresa: ' + empresa, 10, 40);
      doc.text('Valor total do serviço: R$ ' + total.toFixed(2), 10, 50);
      doc.save('servico.pdf');
  });
});