import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { URLink } from "@/app/src/lib/db";
import Ticket from "@/app/(modles)/Ticket";

export async function POST(req) {
    try {

      // Connect to the database
      await mongoose.connect(URLink, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      const body = await req.json();
      const ticketData = body.formData;
  
      // Example: Creating a new ticket in the database
      const newTicket = await Ticket.create(ticketData);
  
      // Close the database connection
      await mongoose.connection.close();
  
      // Return the newly created ticket in the response
      return NextResponse.json({ result: newTicket }, { status: 201 });
    } catch (error) {
      console.error('Error creating new ticket:', error);
      return NextResponse.json({ result: null, error: 'Error creating new ticket' }, { status: 500 });
    }
  }