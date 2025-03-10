# Rodando uma Aplicação Flask no Raspberry Pi

Este guia descreve como configurar e rodar uma aplicação Flask no Raspberry Pi utilizando o método `nohup` para mantê-la rodando em segundo plano.

## Pré-requisitos

- Um Raspberry Pi rodando o Raspberry Pi OS.
- Python 3 e `pip3` instalados (já vem pré-instalado na maioria das distribuições do Raspberry Pi OS).

## Passos para Configurar e Rodar a Aplicação Flask

### 1. Instalar o Flask

Primeiro, certifique-se de que o sistema está atualizado e, em seguida, instale o Flask:

```bash
sudo apt update
sudo apt install python3-pip
pip3 install -r requirements.txt
```

Após finalizar a instalação das dependências, execute o seguinte comando para manter o progama executando em background por tempo indeterminado.

```bash
nohup python3 app.py &
```

O caractere & no final do comando coloca o processo em segundo plano. O nohup assegura que o processo continue rodando mesmo após o encerramento do terminal.

Descubra o IP do seu Raspberry Pi utilizando o comando:

```bash
hostname -I
```

Agora, você pode acessar a aplicação Flask de qualquer dispositivo na mesma rede local pelo endereço:

```bash
http://<ip_do_raspberry_pi>:5000
```

Caso deseje encerrar o processo, você pode capturar a saída e matar o processo em um único comando:

```bash
ps aux | grep app.py | grep -v grep | awk '{print $2}' | xargs kill
```
