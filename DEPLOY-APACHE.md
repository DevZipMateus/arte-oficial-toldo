# Deploy no Apache - Arte Toldo

## Pré-requisitos

1. **Servidor Apache** com os seguintes módulos habilitados:
   - mod_rewrite
   - mod_expires (opcional, para cache)
   - mod_deflate (opcional, para compressão)
   - mod_headers (opcional, para segurança)

2. **Permissões** para modificar arquivos no diretório web

## Passos para Deploy

### 1. Build da Aplicação
```bash
npm run build
# ou
yarn build
```

### 2. Upload dos Arquivos
- Faça upload de todos os arquivos da pasta `dist/` para o diretório do seu site no Apache
- Certifique-se de que o arquivo `.htaccess` está incluído

### 3. Configuração do Apache

#### Opção A: Usando .htaccess (mais simples)
- O arquivo `.htaccess` já está configurado e deve funcionar automaticamente
- Certifique-se de que `AllowOverride All` está habilitado no seu diretório

#### Opção B: Configuração no VirtualHost (mais performático)
- Use o arquivo `apache-config.conf` como base
- Substitua `seu-dominio.com` pelo seu domínio real
- Substitua `/var/www/html/arte-toldo` pelo caminho real dos seus arquivos
- Adicione a configuração ao Apache e reinicie o serviço

### 4. Verificação dos Módulos Apache

Verifique se os módulos necessários estão habilitados:

```bash
# Ubuntu/Debian
sudo a2enmod rewrite
sudo a2enmod expires
sudo a2enmod deflate
sudo a2enmod headers
sudo systemctl restart apache2

# CentOS/RHEL
# Edite /etc/httpd/conf/httpd.conf e descomente as linhas:
# LoadModule rewrite_module modules/mod_rewrite.so
# LoadModule expires_module modules/mod_expires.so
# LoadModule deflate_module modules/mod_deflate.so
# LoadModule headers_module modules/mod_headers.so
sudo systemctl restart httpd
```

### 5. Teste das Rotas

Depois do deploy, teste se as rotas estão funcionando:

- `/` (página inicial)
- `/catalog` (página do catálogo)
- Qualquer URL direta deve redirecionar corretamente para o React Router

## Estrutura de Arquivos no Servidor

```
/var/www/html/arte-toldo/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── outros assets...
├── lovable-uploads/
│   └── todas as imagens...
├── .htaccess
├── robots.txt
└── sitemap.xml
```

## Solução de Problemas

### Erro 404 nas Rotas
- Verifique se o mod_rewrite está habilitado
- Confirme que `AllowOverride All` está configurado
- Verifique se o arquivo `.htaccess` está presente

### Imagens não Carregam
- Confirme que a pasta `lovable-uploads` foi enviada corretamente
- Verifique as permissões dos arquivos de imagem
- Teste o acesso direto a uma imagem via URL

### Performance Lenta
- Habilite mod_deflate para compressão
- Configure cache com mod_expires
- Considere usar um CDN para assets estáticos

### HTTPS/SSL
- Descomente as linhas de HTTPS no `.htaccess` se necessário
- Configure os certificados SSL no VirtualHost
- Use o arquivo `apache-config.conf` como referência

## Comandos Úteis

```bash
# Verificar configuração do Apache
sudo apache2ctl configtest

# Reiniciar Apache
sudo systemctl restart apache2

# Ver logs de erro
sudo tail -f /var/log/apache2/error.log

# Ver logs de acesso
sudo tail -f /var/log/apache2/access.log
```

## Manutenção

- Faça backup regular dos arquivos
- Monitore os logs para identificar problemas
- Mantenha o Apache atualizado
- Considere implementar cache adicional se necessário