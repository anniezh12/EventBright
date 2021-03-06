class EventsController < ApplicationController

      def index
        @events= Event.all
        render json:@events
       end

        def create
          @event= Event.new(event_params)
          if @event.save
            render json: @event
          end
         end

         def update
           @event = Event.find(params[:id])
           @event.update(event_params)
             render json: Event.all
         end

         def destroy
           @event = Event.find(params[:id])
           if @event.destroy
            render json: Event.all
           end

           def like
             @event= Event.find(params[:id])
             @event.likes += 1
             render json:@event
           end
         end

         private
          def event_params
            params.require(:event).permit(:name,:city,:date)
          end

end
