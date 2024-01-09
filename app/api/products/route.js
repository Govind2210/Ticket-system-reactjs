import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { URLink } from "@/app/src/lib/db";
import Ticket from "@/app/(modles)/Ticket";

export async function GET() {
    try {
      // Connect to the database
      await mongoose.connect(URLink, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      // Query all documents from the Ticket collection
      const allTickets = await Ticket.find({});
  
      // Close the database connection
      await mongoose.connection.close();
  
      // Return the fetched data in the response
      return NextResponse.json({ result: allTickets });
    } catch (error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ result: null, error: 'Error fetching data' }, { status: 500 });
    }
  }