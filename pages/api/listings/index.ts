import db from '../../../utils/db';
import { NextApiRequest, NextApiResponse } from 'next'
import { QueryDocumentSnapshot } from 'firebase-admin/lib/firestore'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // Handle POST request
        const { name, price, description, imageSrc, imageAlt } = req.body
        await db.collection('users').doc().set({ name, price, description, imageSrc, imageAlt })
        res.status(200).json({ status: 'Created' })
    } else if (req.method === 'GET') {
        // Handle GET request
        const snapshot = await db.collection('listings').get()
        const listings = snapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data())
        res.status(200).json(listings)
    } else {
        // Handle other HTTP methods
        res.status(405).end(); //Method Not Allowed
    }
}