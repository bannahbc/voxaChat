import json
from channels.generic.websocket import AsyncWebsocketConsumer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        sender_id = self.scope["user"].id
        receiver_id = self.scope['url_route']['kwargs']['receiver_id']

        # Shared room name for both users
        ids = sorted([sender_id, int(receiver_id)])
        self.room_group_name = f"chat_{ids[0]}_{ids[1]}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        print(f"✅ Connected to chat room {self.room_group_name}")

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {"type": "chat_message", "message": data}
        )

    async def chat_message(self, event):
        await self.send(text_data=json.dumps(event["message"]))




# class ChatConsumer(AsyncWebsocketConsumer):
#     print("im attttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
#     async def connect(self):
#         self.receiver_id = self.scope['url_route']['kwargs']['receiver_id']
#         self.room_group_name = f"chat_{self.receiver_id}"

#         await self.channel_layer.group_add(
#             self.room_group_name,
#             self.channel_name
#         )
#         await self.accept()
#         print(f"✅ Connected to chat room {self.room_group_name}")

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard(
#             self.room_group_name,
#             self.channel_name
#         )
#         print(f"⚠️ Disconnected from chat room {self.room_group_name}")

#     async def receive(self, text_data):
#         data = json.loads(text_data)
#         await self.channel_layer.group_send(
#             self.room_group_name,
#             {"type": "chat_message", "message": data}
#         )

#     async def chat_message(self, event):
#         await self.send(text_data=json.dumps(event["message"]))
