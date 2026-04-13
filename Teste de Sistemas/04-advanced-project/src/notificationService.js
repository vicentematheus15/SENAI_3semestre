import { emailService } from './emailService.js'
import { logger } from './logger.js'

export class NotificationService {
  constructor(email = emailService, log = logger) {
    this.email = email
    this.log = log
  }

  formatMessage(userName, event) {
    return `Olá, ${userName}! ${event}`
  }

  async notify(user, event) {
    if (!user.name || !user.email) {
      throw new Error('Usuário inválido')
    }

    const message = this.formatMessage(user.name, event)

    await this.email.send(user.email, 'Notificação', message)
    this.log.log(`Notificação enviada para ${user.email}`)

    return { success: true, message }
  }

  async notifyMany(users, event) {
    if (users.length === 0) {
      throw new Error('Lista de usuários vazia')
    }

    const results = await Promise.all(users.map(u => this.notify(u, event)))
    this.log.log(`${results.length} notificações enviadas`)
    return results
  }
}
