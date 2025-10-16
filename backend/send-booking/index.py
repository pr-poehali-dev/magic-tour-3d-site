import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send booking request email to MagicTour operator
    Args: event - dict with httpMethod, body; context - object with request_id
    Returns: HTTP response dict with statusCode, headers, body
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    tour_type = body_data.get('tourType', '')
    people = body_data.get('people', '')
    date = body_data.get('date', '')
    message = body_data.get('message', '')
    
    if not name or not phone or not tour_type:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name, phone and tour type are required'}),
            'isBase64Encoded': False
        }
    
    smtp_host = os.environ.get('SMTP_HOST', '')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    recipient_email = os.environ.get('RECIPIENT_EMAIL', '')
    
    if not all([smtp_host, smtp_user, smtp_password, recipient_email]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email configuration not set'}),
            'isBase64Encoded': False
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на тур: {tour_type}'
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    
    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #2563EB; border-bottom: 3px solid #10B981; padding-bottom: 10px;">
            🏔️ Новая заявка на бронирование тура
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #F59E0B; margin-top: 0;">Информация о клиенте:</h3>
            <p><strong>👤 Имя:</strong> {name}</p>
            <p><strong>📞 Телефон:</strong> {phone}</p>
            {f'<p><strong>📧 Email:</strong> {email}</p>' if email else ''}
            
            <h3 style="color: #F59E0B; margin-top: 20px;">Детали заявки:</h3>
            <p><strong>🎯 Тип тура:</strong> {tour_type}</p>
            {f'<p><strong>👥 Количество человек:</strong> {people}</p>' if people else ''}
            {f'<p><strong>📅 Желаемая дата:</strong> {date}</p>' if date else ''}
            
            {f'<h3 style="color: #F59E0B; margin-top: 20px;">💬 Дополнительная информация:</h3><p style="background-color: #f0f0f0; padding: 15px; border-radius: 5px;">{message}</p>' if message else ''}
          </div>
          
          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            Заявка отправлена через сайт MagicTour
          </p>
        </div>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))
    
    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Booking request sent successfully'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Failed to send email: {str(e)}'}),
            'isBase64Encoded': False
        }
