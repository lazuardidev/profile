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
  onRetry?: () => void;
};

export function ErrorDialog({ open, onOpenChange, onRetry }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-white/10 bg-neutral-900 text-white">
        <DialogHeader>
          <div className="mx-auto -mt-10 h-20 w-20">
            <Image
              src="/images/mail-error.png"
              alt="Error"
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className="text-center text-base font-semibold">
            Oops! Something went wrong.
          </DialogTitle>
        </DialogHeader>

        <p className="mx-auto max-w-sm text-center text-sm text-white/70">
          We couldn’t send your message. Please try again or check your
          connection.
        </p>

        <Button
          className="mt-6 w-full rounded-full bg-primary-300 text-black hover:bg-primary-200"
          onClick={() => (onRetry ? onRetry() : onOpenChange(false))}
        >
          Try Again
        </Button>
      </DialogContent>
    </Dialog>
  );
}
