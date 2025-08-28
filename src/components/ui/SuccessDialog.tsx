"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onBackHome?: () => void;
};

export function SuccessDialog({ open, onOpenChange, onBackHome }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-white/10 bg-neutral-900 text-white">
        <DialogHeader>
          <div className="mx-auto -mt-10 h-20 w-20">
            <Image
              src="/images/mail-success.png"
              alt="Success"
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className="text-center text-base font-semibold">
            Message Received!
          </DialogTitle>
        </DialogHeader>

        <p className="mx-auto max-w-sm text-center text-sm text-white/70">
          Thanks for reaching out—we’ll get back to you as soon as possible.
        </p>

        <Button
          className="mt-6 w-full rounded-full bg-primary-300 text-black hover:bg-primary-200"
          onClick={() => (onBackHome ? onBackHome() : onOpenChange(false))}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
}
