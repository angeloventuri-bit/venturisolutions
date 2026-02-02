// Supabase Edge Function: send-lead-email
// Deploy: supabase functions deploy send-lead-email

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Parse request body
    const { nome, email, telefone, empresa, desafio, origem, origem_detalhes } = await req.json()

    // Validate required fields
    if (!nome || !email) {
      return new Response(
        JSON.stringify({ error: 'Nome e e-mail são obrigatórios' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Save lead to Supabase
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_KEY!)
    
    const { data: leadData, error: leadError } = await supabase
      .from('leads')
      .insert({
        nome,
        email,
        telefone,
        empresa,
        desafio,
        origem,
        origem_detalhes,
        status: 'novo',
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (leadError) {
      console.error('Erro ao salvar lead:', leadError)
      // Continue mesmo se falhar - o e-mail ainda será enviado
    }

    // Send email via Resend
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Lead - Venturi Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border: 1px solid #8B1538;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #8B1538 0%, #6B0F2A 100%); padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
        🎯 Novo Lead Recebido
      </h1>
      <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">
        Venturi Solutions - Website
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 30px;">
      
      <!-- Lead Info -->
      <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #8B1538; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
          Informações do Lead
        </h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px; width: 120px;">
              <strong>Nome:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${nome}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>E-mail:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              <a href="mailto:${email}" style="color: #8B1538; text-decoration: none;">
                ${email}
              </a>
            </td>
          </tr>
          ${telefone ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Telefone:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              <a href="tel:${telefone}" style="color: #8B1538; text-decoration: none;">
                ${telefone}
              </a>
            </td>
          </tr>
          ` : ''}
          ${empresa ? `
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 12px 0; color: #999; font-size: 14px;">
              <strong>Empresa:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${empresa}
            </td>
          </tr>
          ` : ''}
          ${desafio ? `
          <tr>
            <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">
              <strong>Desafio:</strong>
            </td>
            <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">
              ${desafio}
            </td>
          </tr>
          ` : ''}
        </table>
      </div>

      <!-- Tracking Info -->
      ${origem ? `
      <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #8B1538; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
          📊 Rastreamento
        </h2>
        
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="background-color: #8B1538; color: white; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
            ${origem}
          </span>
          <span style="color: #999; font-size: 14px;">
            ${new Date().toLocaleString('pt-BR')}
          </span>
        </div>

        ${origem_detalhes ? `
        <details style="margin-top: 15px;">
          <summary style="color: #8B1538; cursor: pointer; font-size: 14px;">
            Ver detalhes técnicos
          </summary>
          <pre style="background-color: #000; color: #0f0; padding: 15px; border-radius: 4px; overflow-x: auto; font-size: 12px; margin-top: 10px;">
${JSON.stringify(JSON.parse(origem_detalhes), null, 2)}
          </pre>
        </details>
        ` : ''}
      </div>
      ` : ''}

      <!-- Quick Actions -->
      <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 20px;">
        <h2 style="color: #8B1538; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
          ⚡ Ações Rápidas
        </h2>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="mailto:${email}" style="background-color: #8B1538; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
            📧 Responder E-mail
          </a>
          
          ${telefone ? `
          <a href="https://wa.me/${telefone.replace(/\D/g, '')}" style="background-color: #25D366; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
            💬 WhatsApp
          </a>
          ` : ''}
          
          <a href="${SUPABASE_URL}/auth/v1/admin/users" style="background-color: #333; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
            🗂️ Ver no CRM
          </a>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #0a0a0a; border-top: 1px solid #333; padding: 20px 30px; text-align: center;">
      <p style="color: #666; margin: 0; font-size: 12px;">
        Este é um e-mail automático do sistema de leads da Venturi Solutions
      </p>
      <p style="color: #666; margin: 10px 0 0 0; font-size: 12px;">
        © ${new Date().getFullYear()} Venturi Solutions - Todos os direitos reservados
      </p>
    </div>

  </div>
</body>
</html>
    `

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Venturi Solutions <noreply@venturisolutions.com.br>',
        to: ['angelo.venturi@venturisolutions.com.br'],
        subject: `🎯 Novo Lead: ${nome}${empresa ? ` - ${empresa}` : ''}`,
        html: emailHtml,
        reply_to: email
      })
    })

    const emailResult = await emailResponse.json()

    if (!emailResponse.ok) {
      console.error('Erro ao enviar e-mail:', emailResult)
      return new Response(
        JSON.stringify({ 
          error: 'Erro ao enviar e-mail',
          details: emailResult 
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Lead salvo e e-mail enviado com sucesso',
        lead: leadData,
        email: emailResult
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Erro geral:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Erro interno do servidor',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
