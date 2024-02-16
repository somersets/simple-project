export interface IChatMessagesHistory {
  id: number;
  text: string;
  created_at: string;
  updated_at: string;
  recipient_id: number;
  sender_id: number;
}
