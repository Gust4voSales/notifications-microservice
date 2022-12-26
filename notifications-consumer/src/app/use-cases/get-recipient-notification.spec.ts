import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '1id-recipient' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: '1id-recipient' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '2id-recipient' }),
    );

    const { notifications } = await getRecipientNotification.execute({
      recipientId: '1id-recipient',
    });

    expect(notifications.length).toEqual(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: '1id-recipient' }),
        expect.objectContaining({ recipientId: '1id-recipient' }),
      ]),
    );
  });
});
