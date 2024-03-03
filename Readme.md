## The monolithic architecture had its drawbacks:
 - *Maintenance*: Whenever a bug surfaced, I need to go through layers of tangled code.
 - *Scaling Challenges*: As our app grew, so did the complexity.
 - *Team Coordination*: Different teams working on different parts of the same monolith? Can potentially occur the code conflicts.

## Benefit of Module Federation (learned concepts):
- *Code Splitting*: Instead of one massive chunk, I could break my code into smaller, bite-sized modules. Each module became like a Lego brick (self-contained and ready for action).
- *On-demand Loading*: No more loading everything upfront! I could fetch modules only when needed.
- *Micro-frontend Independence*: I could develop and deploy micro-frontends independently.